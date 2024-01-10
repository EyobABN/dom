# Use an official Node runtime as the base image
FROM node:20-alpine

# Set the working directory in the container to /app
WORKDIR /usr/src/app

# Copy package.json to the working directory
COPY package*.json ./

# Install any dependencies specified in package.json
RUN npm install

# Bundle the app source inside the Docker image
COPY . .

# Make port 8080 available to the outside world
EXPOSE 8080

# Run the app when the container launches
CMD ["node", "server.js"]
