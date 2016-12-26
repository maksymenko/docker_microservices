# AngularJS ES6 application

## Quick start locally

#### Install package management for JavaScript
* download https://nodejs.org/en/download/
```
$ wget https://nodejs.org/dist/v4.6.0/node-v4.6.0-linux-x64.tar.xz
```
* Update npm
```
$ sudo npm install npm -g
```
* Resolve dependencies
```
$ npm install
```
* Build application
```
$ npm run build
```
* Start server
```
$ npm start
```

## Quick start with docker
* build image
```
$ docker build -t  warehouse_ui_node_img . 
```
* Run container and application
```
$ docker run -d --rm --name warehouse_ui_node_app -p 8001:8000 -v "$PWD":/usr/src/app warehouse_ui_node_img
```

---

## Overview

### npm is used to resolve dependensies and run scripts (build, start...)
* Package management tool https://nodejs.org/en/download/
* Dependensies repository (https://www.npmjs.com/)

### Create application from scratch
* init npm project
```
$ npm init  // creates and initialize package.json
```
#### Add AngularJS dependencies 
```
$ npm install angular --save
$ npm install angular-ui-router --save
```
* Resolve dependencies
```
$ npm install
```

#### Setup http server
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
#### Bundle project and all dependencies
* Webpack is powerfull tool to build and bundle application and all dependencies.
    * site https://webpack.js.org/)
* Alternative approaches is to use *browerify* of *jspm* (http://jspm.io/).

#### Install dev tools
* cleanup ***npm install rimraf --save-dev***
* webpack bundling 
    * ***npm install --save-dev webpack***
    * ***npm install --save-dev clean-webpack-plugin***
    * ***npm install -g webpack-dev-server***
    * ***npm install --save-dev html-webpack-plugin***
    * ***npm install --save-dev babel-core babel-preset-es2015***
    * ***npm install --save-dev babel-loader*** 
    * ***npm install --save-dev css-loader***
    * ***npm install --save-dev raw-loader***
    * ***npm install --save-dev jshint-loader***
    * ***npm install --save-dev jshint***
    * ***npm install --save-dev ng-annotate-loader***
    * ***npm install --save-dev url-loader***
    * ***npm install --save-dev material-design-icons***

### Application structure 
* Style guide to organise application
    * https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
    * https://github.com/johnpapa/ng-demos/tree/master/modular
    * https://github.com/toddmotto/angular-styleguide

### Adding Material design
```
$ npm install angular-material --save
$ npm install angular-animate --save
$ npm install angular-aria --save
```

### Icon usage
```
import svg_icons from './img/icons/svg-sprite-content.svg';
...

export default angular.module('warehouse', [
    ngMaterial,
  ])
  .config(($mdIconProvider) => {
    'ngInject';

    $mdIconProvider.iconSet('svg_icons', svg_icons);

  });

....
<md-button class="md-fab md-accent" ng-click="$ctrl.addItem()">
  <md-icon md-svg-src="svg_icons:ic_add_24px"></md-icon>
</md-button>

```
