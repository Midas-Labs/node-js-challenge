# Image Sharing Platform


Build a web application that allows users to upload, view, and share images. The application should be built using Node.js, Express, TypeScript, Postgres, and TypeORM. User authentication must be implemented using Auth0. The application should utilize AWS services such as S3 for image storage, ECS for container orchestration, and CloudFront for content delivery. GraphQL should be used for API development.

## Requirements

1. User Authentication (Auth0):
   - Implement user authentication using Auth0.
   - Integrate Auth0 into the application for user registration, login, and logout functionality.
   - Use Auth0 JWT (JSON Web Tokens) for authentication and authorization.

2. Image Upload:
   - Allow authenticated users to upload images to the platform.
   - Store the uploaded images in AWS S3 and save the image metadata (e.g., URL, user ID, timestamp) in the Postgres database using TypeORM.

3. Image Viewing:
   - Display a gallery of uploaded images on the homepage, accessible to all users (authenticated and unauthenticated).
   - Implement pagination to limit the number of images displayed per page.

4. Image Sharing:
   - Provide a sharing feature that allows users to share images with others via unique URLs.
   - Generate short, shareable URLs for each image using a URL shortening service or a custom implementation.

5. Image Details:
   - Create a detailed view for each image that displays the image, its metadata, and the user who uploaded it.
   - Allow authenticated users to leave comments on images.

6. User Profile:
   - Implement a user profile page that displays the user's uploaded images and allows them to manage their images (e.g., delete, update metadata).

7. GraphQL API:
   - Design and implement a GraphQL API for the Image Sharing Platform.
   - Define GraphQL schemas for queries, mutations, and subscriptions.
   - Implement resolvers to fetch and manipulate data from the Postgres database using TypeORM.

8. API Documentation:
   - Document the GraphQL API using a tool like GraphQL Playground or GraphiQL.
   - Provide clear instructions on how to use the API, including query and mutation examples.

9. AWS Integration:
   - Configure AWS S3 to store and serve the uploaded images.
   - Use AWS ECS (Elastic Container Service) to deploy and run the application.
   - Set up AWS CloudFront as a content delivery network (CDN) to improve the performance and reduce latency for image delivery.

10. Testing:
    - Write unit tests for critical components of the application using a testing framework like Jest or Mocha.
    - Implement integration tests to ensure the proper functioning of GraphQL API endpoints and database interactions.


## Evaluation Criteria

- Correct functionality of the image uploading, viewing, and sharing features.
- Proper implementation of user authentication and authorization using Auth0.
- Efficient use of AWS services (S3, ECS, CloudFront) for image storage, deployment, and content delivery.
- Proper design and implementation of the REST API.
- Code quality, readability, and adherence to best practices and design patterns.
- Comprehensive API documentation.
- Bonus points for containerization using Docker and infrastructure as code using Terraform.
- Bonus points for implementing a GraphQL API as an alternative to the REST API.
- Test coverage and quality of unit and integration tests.

  
## Submission

- Fork this repo and implement your solution.
- Submit a PR and notify us of the submission.
- Include a README file with detailed instructions on how to set up and run the application locally and how to deploy it to AWS using ECS and CloudFront.
- Share the API documentation and any additional notes or considerations. If you are sharing any API keys, please email them using https://share.doppler.com/.

Good luck with the coding challenge!
