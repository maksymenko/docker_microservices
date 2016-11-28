## Customized Mongo 3.2 Image. Creates user, password and Database.
Image is based on Official Repository mongo 3.2.

**Build Image**
```
$ docker build -t warehouse_mongo_img .
```

**Run Container and add user**
```
$ docker run -d -p 27017:27017 -p 28017:28017 -e MONGODB_USER="m_usr" -e MONGODB_PWD="m_pwd" -e MONGODB_DB="warehouse" warehouse_mongo_img
```

----
#### References:
* https://hub.docker.com/r/library/mongo/
* https://docs.docker.com/engine/examples/mongodb/

----
##### TODO:
* avoid using root.
* install mongo from distributive instead of using base image.
