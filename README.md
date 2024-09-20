# SnapGrid

SnapGrid is a full-stack application built with modern technologies for managing user data and uploading images. It leverages a Node.js backend with TypeScript, GraphQL for querying data, TypeORM for database interactions with Postgres, and AWS S3 for image storage.

## Table of Contents

- [Technologies](#technologies)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Scripts](#scripts)


## Technologies

- **Node.js** - Backend framework
- **TypeScript** - Superset of JavaScript with static types
- **GraphQL** - Query language for the API
- **TypeORM** - ORM for Postgres database
- **Postgres** - Relational database for data storage
- **AWS S3** - Cloud storage service for image uploads

## Features

SnapGrid provides the following features:

- **User Authentication** - Sign up, log in using Auth0 Universal Login.
- **Image Upload** - Users can upload profile pictures to AWS S3.
- **GraphQL API** - Perform data queries and mutations for user-related operations.
- **Postgres Integration** - Reliable storage of user information via TypeORM.
- **Strongly Typed Codebase** - Built with TypeScript for better maintainability and fewer bugs.


## Prerequisites

Before setting up SnapGrid, ensure you have the following installed:

- **Node.js** (v16.x or higher)
- **PostgreSQL** (v13.x or higher)
- **AWS Account** with an S3 bucket created

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/YHMounika/node-js-challenge.git
cd snapgrid

### 2. npm install
This will install all the dependencies 

### 3. Create AWS Account
-**RDS**-Create Amazon RDS for postgres. Use the same Host, Username, password and Database for integration
-**S3 Bucket**-Create S3 Bucket and IAM user with Identity defined policies. Save the Access Key Id and Secret Access Key Id generated 

##  Environment Variables
Below is a list of all required environment variables for SnapGrid:

-DB_TYPE: The type of Database used (in our case postgres)
-DB_HOST: The host of your Postgres database (e.g., localhost).
-DB_PORT: The port number for Postgres (default is 5432).
-DB_USERNAME: The username for your Postgres database.
-DB_PASSWORD: The password for your Postgres user.
-DB_DATABASE: The name of the Postgres database.
-AWS_ACCESS_KEY_ID: Your AWS access key for accessing S3.
-AWS_SECRET_ACCESS_KEY: Your AWS secret access key.
-S3_BUCKET_NAME: The name of the AWS S3 bucket to store images.
-S3_REGION: The AWS region where your S3 bucket is located.
-PORT: The port on which the application will run (default is 3000).
-AUTH0_SECRET: Secret key for encrypting cookies and sessions.
-AUTH0_BASEURL: The base URL of your application for Auth0 redirects.
-AUTH0_CLIENTID: Public identifier for your Auth0 application.
-AUTH0_CLIENTSECRET: Confidential key for app authentication -with Auth0.
-AUTH0_ISSUERBASEURL: URL of your Auth0 tenant for token validation.


## API Documentation
### Schema
#### Types

##### User

type User {
  name: String
  email: String
}

##### File

type File {
  url: String!
}

#### Scalars
##### Upload
scalar Upload

#### Mutations
##### saveUser
type Mutation {
  saveUser(name: String!, email: String!): User
}
Arguments:
name (String!): The name of the user.
email (String!): The email of the user.
Returns:
User: The saved user object.

##### upload
type Mutation {
  upload(userId: String!, file: Upload!): File!
}
Arguments:
userId (String!): The ID of the user.
file (Upload!): The file to be uploaded.
Returns:
File!: The uploaded file object with its URL.

### Resolvers
####saveUser Resolver
Handles the saveUser mutation to save a new user.

-Arguments:
name (String!): The name of the user.
email (String!): The email of the user.
auth0Id (String!): The Auth0 ID of the user.
picture (String): The picture URL of the user (optional).
-Returns:
User: The saved user object.

####upload Resolver
Handles the upload mutation to upload a file for a specific user.

-Arguments:
userId (String!): The ID of the user.
file (Upload!): The file to be uploaded.
-Returns:
File!: The uploaded file object with its URL.


##Usage
Once the application is up and running, you can:

-Create a new user by signing up via the GraphQL API.
-Upload an image as a user, which will be saved to AWS S3. Fetch and display the images saved.
-Query user data or mutate (update/delete) user data via the GraphQL playground at /graphql.
To interact with the API, visit http://localhost:4000/graphql to use the built-in GraphQL Playground.

##Scripts
-npm run start: Starts the application in production mode.
-npm run dev: Starts the application in development mode with hot-reloading.
-npm run build: Compiles TypeScript files into JavaScript for production.

