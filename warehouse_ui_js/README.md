## Angular JS  based UI 

#### Install package management for JavaScript
```
download https://nodejs.org/en/download/
$ wget https://nodejs.org/dist/v4.6.0/node-v4.6.0-linux-x64.tar.xz
to update npm
$ sudo npm install npm -g
$ npm init  # creates and initialize package.json
```

#### http-server plugin
```
$ npm install http-server -g
```

**Run local http server** 
```
$ http-server

```
**or add script to ./package.json and use start command**

```
{
  "name": "my_server",
  "scripts": {
    "start": "http-server -a localhost -p 8000 -c-1 ./app/"
  }
}

$ npm start

```

#### JS package management 
```
https://www.npmjs.com/package/package
$ npm install angular --save
```

#### Resolve all packages 
```
$ npm install
```


#### JS package management  bower 
```
$ npm bower bower -g
$ bower init #init bower (add bover.json)
$ bower install angular --save  (package search https://bower.io/search/)
```

**Resolve dependencies**
```
bower install
```