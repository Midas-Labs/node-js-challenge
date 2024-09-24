import * as dotenv from 'dotenv'

dotenv.config()

export const auth0Config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.AUTH0_SECRET, 
    baseURL: process.env.AUTH0_BASEURL,
    clientID: process.env.AUTH0_CLIENTID,
    clientSecret: process.env.AUTH0_CLIENTSECRET,
    issuerBaseURL: process.env.AUTH0_ISSUERBASEURL,
    authorizationParams: {
      response_type: 'code',
      scope: 'openid profile email',
    },
  };

//   B5TKTo5Erwow0qOABOJIX1zRaJE0vUPJhZJc-PZ0nRn30VYvMmkfi1EWmaf2dg0D