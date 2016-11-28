# Spring Boot - REST  - Jetty - Executable jar

**Run inside docker**

* Build image 
```
$ docker build -t  warehouse_api_node_img . 
```
* Run contained and application
```
$ docker run -d --rm --name warehouse_api_java_app -p 8081:8080 -v "$PWD":/usr/src/app warehouse_api_node_img
```


**Configure mongoDB**
```
$ mongo
> use warehouse
> show collections;
> db.createUser({user: "mongo_usr", pwd: "mongo_pwd", roles: []});

```

**Build executable jar and run**
```
$ ./gradlew build && java -jar ./build/libs/Warehouse-0.0.1-SNAPSHOT.jar
```

**Run in-place** 
```
$ gradle bootRun
```
**Usage**
* Add item
```
curl -i -POST -H 'Content-Type: application/json' \
-d '{"sku":"AAA125", "name":"book", "description":"fiction", "price":"123.23"}' \
http://localhost:8080/item
```

* Show item list
```
curl http://localhost:8080/item
```


## Steps
* Create project
```
$ gradle init --type=java-library
```
* Add Spring boot dependecies and plugin


----
#### References:
* http://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/
* https://spring.io/guides/gs/spring-boot/
* http://spring.io/guides/gs/accessing-data-mongodb/