FROM node:6.9.1


RUN mkdir -p /usr/src/app && chown -R node /usr/src/app

USER node

WORKDIR /usr/src/app

COPY ./ /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080
CMD [ "npm", "start" ]
