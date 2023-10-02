# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies inside the container
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Set the command to run your app using CMD
CMD [ "node", "app.js" ]
