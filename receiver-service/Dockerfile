# receiver-service/Dockerfile
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies, including express and nodemon
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port (adjust according to your app's port)
EXPOSE 3000

# Use npx to ensure nodemon from node_modules is used
CMD ["npm", "run", "dev"]
