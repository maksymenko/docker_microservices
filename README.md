## Docker based microservices.
### Includes services below:
* ***web*** - Angular based UI, nodejs is used as webserver
* ***api*** - Spring based application, provides REST api, SpringBoot with embeded Jetty bundled to executable jar.
* ***db***  - MongoDB. Docker image based on MongoDB, allows configure database, username and password for running container.

**Preconnditions**
* Install docker-engine and docker-compose  (https://docs.docker.com/compose/install/)


**Run all services**
```
$ docker-compose up -d
```
