import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { CatalogModule } from './catalog/catalog.module';
import { LayoutModule } from './layout/layout.module';

export const ComponentsModule = angular
  .module('app.components', [
    CatalogModule,
    LayoutModule
  ])
  .name;