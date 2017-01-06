import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { LayoutModule } from './layout/layout.module';

export const ComponentsModule = angular
  .module('app.components', [
    LayoutModule
  ])
  .name;