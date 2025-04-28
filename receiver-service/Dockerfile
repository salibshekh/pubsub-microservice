# receiver-service/Dockerfile
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Clean npm cache to avoid potential issues
RUN npm cache clean --force

# Install dependencies, including express and nodemon
RUN npm install

# Copy the rest of the application files
COPY . .

# Ensure the app files have proper ownership
RUN chown -R node:node /usr/src/app

# Expose port (adjust according to your app's port)
EXPOSE 3000

# Use npx to ensure nodemon from node_modules is used
CMD ["npx", "nodemon", "app.js"]
