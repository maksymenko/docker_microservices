## Angular JS  based UI 

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