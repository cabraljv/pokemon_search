FROM node:16-alpine

# Create app directory
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

# Bundle app source
COPY . .

EXPOSE $PORT
CMD [ "node", "index.js" ]