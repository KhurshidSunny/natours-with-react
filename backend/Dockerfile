# Use the official Node.js image as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application files to the container
COPY . .

# Set environment variables (optional, as you can pass them from the platform)
ENV NODE_ENV=production

# Expose the port that the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
