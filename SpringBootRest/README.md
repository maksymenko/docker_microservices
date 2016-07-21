# Spring Boot - REST  - Jetty - Executable jar

**Build executable jar and run**
```
$ gradle build
$ java -jar build/libs/mymodule-0.0.1-SNAPSHOT.jar
```
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
