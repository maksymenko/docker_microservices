'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import StoreController from './store-controller';


angular.module('warehouse', [
  'StoreModule',
  uiRouter
]).
config(function($stateProvider, $urlRouterProvider) {
  var storeState = {
    name: 'store',
    url: '/store',
    controller: 'StoreController',
    templateUrl: require('./store.html')
  }

  var settingsState = {
    name: 'settings',
    url: '/settings',
    template: '<h3>Settings</h3>'
  }

  // For any unmatched url, send to /store
  $urlRouterProvider.otherwise("/store")
  $stateProvider.state(storeState);
  $stateProvider.state(settingsState);

});