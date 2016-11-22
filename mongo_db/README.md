## Customized Mongo 3.2 Image. Creates user, password and Database.
Image is based on Official Repository mongo 3.2.

**Build Image**
```
$ docker build -t wh_mongo .
```

**Run Container**
```
$ docker run -d -e MONGODB_USER="m_usr" -e MONGODB_PWD="m_pwd" -e MONGODB_DB="warehouse_1" wh_mongo
```

----
#### References:
* https://hub.docker.com/r/library/mongo/
* https://docs.docker.com/engine/examples/mongodb/

----
##### TODO:
* avoid using root.
* install mongo from distributive instead of using base image.
