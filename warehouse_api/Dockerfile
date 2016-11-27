FROM openjdk:8-alpine

MAINTAINER Sergii Maksymenko "sergey.maksymenko@gmail.com"


#Install utils
RUN apk add --update \
      bash \
      curl \
    && rm -rf /var/cache/apk/*

# solve issue with libnative-platform.so
RUN apk update && apk add libstdc++ && rm -rf /var/cache/apk/*

WORKDIR /usr/src/warehouse
COPY ./ /usr/src/warehouse

#Install Gradle
RUN ./gradlew

#Build application
RUN ./gradlew build

EXPOSE 8080

CMD ["java", "-jar", "./build/libs/Warehouse-0.0.1-SNAPSHOT.jar"]