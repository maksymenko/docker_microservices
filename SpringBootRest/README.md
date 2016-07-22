# Spring Boot - REST  - Jetty - Executable jar

**Build executable jar and run**
```
$ ./gradlew build && java -jar ./build/libs/StringBootRest-0.0.1-SNAPSHOT.jar
```

./gradlew build && java -jar ./build/libs/StringBootRest-0.0.1-SNAPSHOT.jar

**Run in-place** 
```
$ gradle bootRun
```

## Steps
* Create project
```
$ gradle init --type=java-library
```
* Add Spring boot dependecies and plugin
