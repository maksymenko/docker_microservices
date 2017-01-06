FROM node:6.9.1-alpine

MAINTAINER Sergii Maksymenko "sergey.maksymenko@gmail.com"

RUN mkdir -p /usr/web_client/src/app && chown -R node /usr/web_client

RUN npm install http-server -g

USER node

WORKDIR /usr/web_client

#Install required dependencies
COPY ./package.json /usr/web_client/package.json
RUN npm install

# Bundle app source
COPY ./src /usr/web_client/src
COPY ./webpack.config.js /usr/web_client/webpack.config.js
COPY ./.jshintrc /usr/web_client/.jshintrc

RUN npm run build

EXPOSE 8000
CMD [ "npm", "start" ]
