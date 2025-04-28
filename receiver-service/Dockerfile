# receiver-service/Dockerfile
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# Clean npm cache to avoid potential issues
RUN npm cache clean --force

# Install dependencies, including development dependencies (nodemon)
RUN npm install

# Optionally, install nodemon globally (if you prefer global installation)
# RUN npm install -g nodemon

# Bundle app source
COPY . .

# App will run on port 3000
EXPOSE 3000

CMD ["npm", "run", "dev"]
