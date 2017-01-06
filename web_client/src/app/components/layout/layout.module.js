import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import LayoutComponent from './layout.component';
import LayoutController from './layout.controller';
import 'material-design-icons/iconfont/material-icons.css';
import './layout.css';

export const LayoutModule = angular
  .module('layoutModule', [
    ngMaterial,
    uiRouter,
  ])
  .controller('layoutController', LayoutController)
  .component(LayoutComponent.name, LayoutComponent.config)
  .name;