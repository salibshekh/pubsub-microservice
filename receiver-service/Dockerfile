# receiver-service/Dockerfile

FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# App will run on port 3000
EXPOSE 3000

CMD [ "npm", "run", "dev" ]
