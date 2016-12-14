'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';


export default angular.module('warehouse', [
    ComponentsModule,
    uiRouter
  ])
  .component('app', AppComponent)
  .name;