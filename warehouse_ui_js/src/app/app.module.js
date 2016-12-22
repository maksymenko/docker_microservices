'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import 'angular-material/angular-material.css';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import svg_icons from './img/icons/svg-sprite-content.svg';

export default angular.module('warehouse', [
    ngMaterial,
    ComponentsModule,
    uiRouter
  ])
  .config(($mdIconProvider, $mdThemingProvider) => {
    'ngInject';

    $mdIconProvider.iconSet('svg_icons' , svg_icons);
     
    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .accentPalette('amber')
        .warnPalette('red');
  })
  .component('app', AppComponent)
  .name;