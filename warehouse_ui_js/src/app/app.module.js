'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import 'angular-material/angular-material.css';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';

export default angular.module('warehouse', [
    ngMaterial,
    ComponentsModule,
    uiRouter
  ])
  .config(($mdIconProvider, $mdThemingProvider) => {
    'ngInject';

    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .accentPalette('teal')
        .warnPalette('red');
  })
  .component('app', AppComponent)
  .name;