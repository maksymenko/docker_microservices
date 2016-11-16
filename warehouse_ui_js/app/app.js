'use strict';

angular.module('warehouse', [
  'StoreModule',
  'ui.router'
]).
config(function($stateProvider, $urlRouterProvider) {
  var storeState = {
    name: 'store',
    url: '/store',
    controller: 'StoreController',
    templateUrl: 'store.html'
  }

  var settingsState = {
    name: 'settings',
    url: '/settings',
    template: '<h3>Settings</h3>'
  }

  // For any unmatched url, send to /route1
  $urlRouterProvider.otherwise("/store")
  $stateProvider.state(storeState);
  $stateProvider.state(settingsState);

});