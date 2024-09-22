# Use the official Node.js image as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json from the backend folder to the container
COPY backend/package*.json ./

# Install production dependencies
RUN npm install --production

# Copy the rest of the backend application files to the container
COPY backend/ .

# Set environment variables (optional, as you can pass them from the platform)
ENV NODE_ENV=production

# Expose the port that the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
