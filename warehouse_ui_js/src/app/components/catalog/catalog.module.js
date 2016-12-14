import angular from 'angular';
import uiRouter from 'angular-ui-router';
import CatalogComponent from './catalog.component';

export const CatalogModule = angular
  .module('calendar', [
    uiRouter
  ])
  .component(CatalogComponent.name, CatalogComponent.config)
  .name;