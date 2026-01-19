FROM node:16-alpine

WORKDIR /usr/src/server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000
CMD ["node", "server.js"]