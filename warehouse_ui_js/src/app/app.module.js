import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import 'angular-material/angular-material.css';
import { ComponentsModule } from './components/components.module';
import { AboutModule } from './about/about.module';

export default angular.module('warehouse', [
    ngMaterial,
    uiRouter,
    AboutModule,
    ComponentsModule
  ])
  .config(($mdIconProvider, $mdThemingProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .accentPalette('amber')
        .warnPalette('red');
  })
  .name;