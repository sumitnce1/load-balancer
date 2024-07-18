# Use the official Node.js 16 image based on Alpine Linux
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --force --silent

# Copy the working directory
COPY . ./

EXPOSE 8000

# Command to run the application
CMD [ "node", "index.js" ]