# listener-service/Dockerfile

FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Listener service ka koi HTTP API nahi, but expose karte hai (optional)
EXPOSE 3001

# Run in dev mode (same as receiver-service)
CMD ["npm", "run", "dev"]
