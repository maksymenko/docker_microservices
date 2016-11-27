FROM node:6.9.1-alpine

MAINTAINER Sergii Maksymenko "sergey.maksymenko@gmail.com"

RUN mkdir -p /usr/src/app && chown -R node /usr/src/app

RUN npm install http-server -g

USER node

WORKDIR /usr/src/app

COPY ./ /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8000
CMD [ "npm", "start" ]
