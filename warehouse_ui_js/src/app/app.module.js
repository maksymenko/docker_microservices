import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import 'angular-material/angular-material.css';
import { ComponentsModule } from './components/components.module';
import { AboutModule } from './about/about.module';
import { CatalogModule } from './catalog/catalog.module';
import httpInterceptor from './core/http.interceptor';

export default angular.module('warehouse', [
    ngMaterial,
    uiRouter,
    AboutModule,
    CatalogModule,
    ComponentsModule
  ])
  .config(($mdIconProvider, $mdThemingProvider, $urlRouterProvider, $httpProvider) => {
    'ngInject';

    $httpProvider.interceptors.push(httpInterceptor);

    $urlRouterProvider.otherwise('/');

    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .accentPalette('amber')
        .warnPalette('red');
  })
  .name;