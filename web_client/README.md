# AngularJS, ES6, webpack, material-design

## Quick start locally

#### Install package management for JavaScript
* download https://nodejs.org/en/download/
```
$ wget https://nodejs.org/dist/v4.6.0/node-v4.6.0-linux-x64.tar.xz
```
* Update npm, resolve dependencies, build and start application.
```
$ sudo npm install npm -g
$ npm install
$ npm run build
$ npm start
```

## Quick start with docker
* build image
```
$ docker build -t  web_client_img .
```
* Run container and application
```
$ docker run -d --name web_client_cont -p 8001:8000 -v "$PWD":/usr/web_client web_client_img
```
* ssh console to container
```
docker exec -it web_client_cont sh
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
$ npm install --save angular
$ npm install --save angular-ui-router
$ npm install --save angular-resource
```
**Note: use  "angular-ui-router": "^1.0.0-beta.3"** or higher with AngularJS 1.6

#### Setup http server
```
$ npm install http-server -g
$ http-server
```
* Add script to ./package.json and use start command
```
{
  "name": "my_server",
  "scripts": {
    "start": "http-server -a localhost -p 8000 -c-1 ./dist/"
  }
}

$ npm start
```
### Bundle project and all dependencies/resources
* Webpack is powerfull tool to build and bundle application and all dependencies.
    * https://webpack.js.org/
* Alternative approaches is to use *browerify* of *jspm* (http://jspm.io/).

* ***webpack-dev-server*** dev server starts application and listen changes in source folder to redeploy on fly.
```
npm run devserver
```

#### Install dev tools
```
$ npm install --save-dev webpack
$ npm install --save-dev clean-webpack-plugin
$ npm install --save-dev webpack-dev-server
$ npm install --save-dev html-webpack-plugin
$ npm install --save-dev babel-core babel-preset-es2015
$ npm install --save-dev babel-loader 
$ npm install --save-dev css-loader
$ npm install --save-dev style-loader
$ npm install --save-dev file-loader
$ npm install --save-dev raw-loader
$ npm install --save-dev jshint-loader
$ npm install --save-dev jshint
$ npm install --save-dev ng-annotate-loader
$ npm install --save-dev url-loader
$ npm install --save-dev file-loader
$ npm install --save-dev  ng-cache-loader
$ npm install --save-dev angular-resource
```

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
$ npm install material-design-icons --save
```

Usefull resources: 
* https://material.angularjs.org/
* https://github.com/angular/material-start/tree/es6
* https://material.io/icons/

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

#### JavaScript code alalizing tool
* http://jshint.com
* Add configuration file for code alalyzer.
```
.jshintrc
```


## Unit tests

### Add dependencies for **Karma** rest runner and **Jasmin** test framework
```
$ npm install --save-dev karma
$ npm install --save-dev karma-cli
$ npm install --save-dev karma-chrome-launcher
$ npm install --save-dev karma-phantomjs-launcher

$ npm install --save-dev karma-jasmine
$ npm install --save-dev jasmine-core
```

### Initialize karma configuration file.

`karma.conf.js`
```
karma init
```
> use PhantomJS to avoid Chrome browser launch

### Add **karma-webpack** plugin
Karma webpack plugin resolves ES6 dependencies for test and bundles everithing required for given test and webpack does for app.
```
$ npm install --save-dev karma-webpack
```
* Create config file to ressolve dependencies and add common test dependencies.

`test.bundle.js`
```
let context = require.context('./app', true, /\.test\.js/);

context.keys().forEach(context);
```
* Use `test.bundle.js` as entry point in 'karma.conf.js'



var webpackConfig = require('./webpack.config.js');

webpack: webpackConfig,

files: [
       {pattern: './test.bundle.js', watched: false}
    ],
preprocessors: {
      './config/karma-test-shim.js': ['webpack', 'sourcemap']
    },

npm install --save-dev karma-sourcemap-loader


#### Unit tests (TBD)
* test runner:  https://karma-runner.github.io
* BDD framework: Jasmin https://jasmine.github.io
* E2E testa:  https://github.com/angular/protractor
