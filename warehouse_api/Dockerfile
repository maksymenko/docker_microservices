FROM openjdk:8-alpine

MAINTAINER Sergii Maksymenko "sergey.maksymenko@gmail.com"


#Install bash
RUN apk add --update bash && rm -rf /var/cache/apk/*

# solve issue with libnative-platform.so
RUN apk update && apk add libstdc++ && rm -rf /var/cache/apk/*

WORKDIR /usr/src/warehouse
COPY ./ /usr/src/warehouse

#Install Gradle
RUN ./gradlew

#Build application
RUN ./gradlew build && java -jar ./build/libs/Warehouse-0.0.1-SNAPSHOT.jar

EXPOSE 8080

CMD ["java", "-jar", "./build/libs/Warehouse-0.0.1-SNAPSHOT.jar"]