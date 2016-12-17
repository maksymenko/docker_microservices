import angular from 'angular';
import uiRouter from 'angular-ui-router';
import CatalogComponent from './catalog.component';
import CatalogService from './catalog.service';
import CatalogController from './catalog.controller';

export const CatalogModule = angular
  .module('calendar', [
    uiRouter
  ])
  .service('catalogService', CatalogService)
  .controller('catalogController', CatalogController)
  .component(CatalogComponent.name, CatalogComponent.config)
  .name;