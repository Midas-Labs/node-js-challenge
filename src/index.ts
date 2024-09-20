import express from "express"
import { AppDataSource } from "./data-source"
import { graphqlHTTP } from "express-graphql"
import path from "path"
import { auth, requiresAuth } from 'express-openid-connect';
import { auth0Config } from './Authentication/Auth0Service';
import { schema } from './ApiService/Schema';
import { resolvers } from './ApiService/Resolvers';
import { UserController } from "./controller/UserController";
import { ApolloServer, gql } from "apollo-server-express";
import { readFileSync } from "fs";
import { graphqlUploadExpress } from "graphql-upload-ts"; 
import { ImageController } from "./controller/ImageController";

AppDataSource.initialize().then(async () => {

  // create express app
  const app = express()

  // integrate views for UI
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));

  // Set up Auth0 middleware
  app.use(auth(auth0Config));
  app.use(express.json({ limit: "50mb" }));
  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));

  const typeDefs = gql(
    readFileSync("./src/ApiService/schema.graphql", { encoding: "utf-8" })
  );

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      const user = req.oidc && req.oidc.user ? req.oidc.user : null;
      return { user }; 
    },
    csrfPrevention: true, 
  });


  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });


  app.get('/', async (req, res) => {
    if (req.oidc.isAuthenticated()) {
      let userController = new UserController();
      let user = await userController.save(req.oidc.user.name, req.oidc.user.email, req.oidc.user.sub)
      let imageController = new ImageController();
      let images = await imageController.getImagesByUserId(req.oidc.user.sub)
      res.render('profile', { user: user, images: images} );
    }
    else {
      res.render('index', {
        isAuthenticated: req.oidc.isAuthenticated(),
        user: req.oidc.user
      });
    }
  });

  app.get('/profile', requiresAuth(), (req, res) => {
    if (req.oidc.isAuthenticated()) {
      res.render('profile', {
        userProfile: JSON.stringify(req.oidc.user, null, 2),
        user: req.oidc.user
      });
    }
    else {
      res.redirect('/')
    }
  });



  app.listen(3000, () => console.log(`Node Graphql API listening on port 3000!. Open http://localhost:3000/ to see results`));


}).catch(error => console.log(error))
