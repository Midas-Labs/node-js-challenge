import { UserController } from "../controller/UserController";
import { ImageController } from "../controller/ImageController";
import { GraphQLUpload } from 'graphql-upload-ts';
import { s3 }  from "../AwsServices/S3Service"
import * as dotenv from 'dotenv'

dotenv.config()

export const resolvers = {
    Query: {
        hello: () => 'Hello World!',
        user: (args, req) => {
            return {
                name: req.oidc.user.name,
                email: req.oidc.user.email,
            };
        },
    },
    Upload: GraphQLUpload,
    Mutation: {
        saveUser: async (parent, { name, email, auth0Id, picture }) => {
            let userController = new UserController();
            let user = await userController.save(name, email, auth0Id)
            return user;
        },
        upload: async (_, { userId, file }) => {
            try {
                if (!file) {
                    throw new Error('No file provided')
                }
                const { createReadStream, filename, mimetype } = await file;
                const stream = createReadStream();
                const params = {
                    Bucket: process.env.AWS_S3_BUCKET_NAME,
                    Key: `${userId}/${filename}`,
                    Body: stream,
                    ContentType: file.mimetype
                };
                const res = await s3.upload(params).promise();
                console.log(`File: ${filename} uploaded successfully`);
                console.log(res.Location)
                let imageController = new ImageController();
                await imageController.save(res.Location, userId)
                return `Uploaded Location: ${res.Location}`;
            } catch (error) {
                console.error("Error uploading file:", error);
                throw new Error("Failed to upload file");
            }
        },
    },

};