# Stage 1: Build the application
FROM node:lts AS build

# Set the working directory inside the container
WORKDIR /app

# Copy your application source code into the container
COPY . .

# Copy package.json and package-lock.json
COPY package*.json ./

# Fetch environment variables from Dockerfile
ARG API_HOST

# Set environment variables for the application
ENV REACT_APP_API_HOST $API_HOST

# Install dependencies and build your application
RUN npm install --force --silent
RUN npm run build


# Stage 2: Serve the application using a lightweight server
FROM node:lts AS serve

# Set the working directory inside the container
WORKDIR /app

# Install the "serve" package globally using npm
RUN npm install -g serve

# Copy the built files from the previous build stage into the container
COPY --from=build /app/build /app

# Expose the default HTTP port used by "serve"
# EXPOSE 3000

# Start the "serve" command to serve the static files
CMD ["serve", "-s", "."]