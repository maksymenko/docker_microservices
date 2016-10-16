# Angular JS 

**Install nodeJS**
```
download https://nodejs.org/en/download/
$ wget https://nodejs.org/dist/v4.6.0/node-v4.6.0-linux-x64.tar.xz

```

**Install http server plugin**
```
$ npm install http-server -g
```

**Run local http server** 
```
$ http-server

```

```
or add script to ./package.json

{
  "name": "my_server",
  "scripts": {
    "start": "http-server -a localhost -p 8000 -c-1 ./app/"
  }
}
```
