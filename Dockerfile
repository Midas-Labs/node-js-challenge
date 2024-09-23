FROM node:lts-alpine
WORKDIR /usr/app
ENV NODE_ENV=production
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
COPY .env* ./
RUN touch .env
RUN npm install --silent && rm -rf ../node_modules && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /usr/app
USER node
CMD ["npm", "start"]
