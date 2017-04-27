import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import AboutComponent from './about.component';
import AboutController from './about.controller';

export const AboutModule = angular
  .module('AboutModule', [
    ngMaterial,
    uiRouter
  ])
  .controller('aboutController', AboutController)
  .component(AboutComponent.name, AboutComponent.config)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state({
        name: 'about',
        url: '/about',
        component: AboutComponent.name
      });
  })
  .name;