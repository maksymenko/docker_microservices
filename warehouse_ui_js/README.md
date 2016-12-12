## Angular JS  based UI 

### Run inside docker
* build image
```
$ docker build -t  warehouse_ui_node_img . 
```
* Run contained and application
```
$ docker run -d --rm --name warehouse_ui_node_app -p 8001:8000 -v "$PWD":/usr/src/app warehouse_ui_node_img
```

### Run without docker

#### Install package management for JavaScript
* download https://nodejs.org/en/download/
```
$ wget https://nodejs.org/dist/v4.6.0/node-v4.6.0-linux-x64.tar.xz
```
* Update npm
```
$ sudo npm install npm -g
```
* init npm project
```
$ npm init  # creates and initialize package.json
```
* Add dependencies (https://www.npmjs.com/)
```
$ npm install angular --save
```
* Resolve dependencies
```
$ npm install
```

#### http-server plugin
```
$ npm install http-server -g
```
* Run local http server 
```
$ http-server
```
* Add script to ./package.json and use start command
```
{
  "name": "my_server",
  "scripts": {
    "start": "http-server -a localhost -p 8000 -c-1 ./app/"
  }
}

$ npm start
```

### Install dev tools
* cleanup ***npm install rimraf --save-dev***
* webpack bundling 
    * ***npm install webpack --save-dev***
    * ***npm install --save-dev babel-core babel-preset-es2015***
    * ***npm install --save-dev babel-loader*** 
    * ***npm install --save-dev html-webpack-plugin***
    * ***npm install --save-dev css-loader***
    * ***npm install --save-dev raw-loader***
