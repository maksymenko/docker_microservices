'use strict';

export default angular.module('StoreModule', [])
    .controller('StoreController', function($scope, $http) {
      'ngInject';
        $http.get('http://127.0.0.1:8081/item').
            then(function successCallback(response) {
                $scope.itemList = response.data;
            },function errorCallback(response) {
                console.log('error');
                $scope.message = "Can't retrieve data from server";
            }
            );
    });