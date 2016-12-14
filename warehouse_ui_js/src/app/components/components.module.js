import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { CatalogModule } from './catalog/catalog.module';

export const ComponentsModule = angular
  .module('app.components', [
    CatalogModule
  ])
  .name;