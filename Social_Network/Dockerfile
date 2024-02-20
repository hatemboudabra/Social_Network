FROM node:20-alpine

COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm install
RUN npm install -g nodemon

EXPOSE 5000
CMD [ "nodemon", "server.js"]