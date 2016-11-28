angular.module('StoreModule', [])
    .controller('StoreController', function($scope, $http) {
        $http.get('http://api:8080/item').
            then(function successCallback(response) {
                $scope.itemList = response.data;
            },function errorCallback(response) {
                console.log('error');
                $scope.message = "Can't retrieve data from server";
            }
            );
    });