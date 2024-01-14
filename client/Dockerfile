# Use the official node:20-apline image as base image
FROM node:20-alpine

# Set working directory in the container to /app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the
# working directory of docker image (/usr/src/app)
COPY package*.json ./

# Copy local directories to the current local directory of docker image (/usr/src/app)
COPY ./src ./src
COPY ./public ./public

# Build the application
# Install node packages, install serve, build the app, and remove dependencies at the end
RUN npm install \
    && npm install -g serve \
    && npm run build \
    && rm -rf node_modules

# Make port 3000 available to the outside world
EXPOSE 3000

# Run the app when the container launches
CMD ["serve", "-s", "build"]
