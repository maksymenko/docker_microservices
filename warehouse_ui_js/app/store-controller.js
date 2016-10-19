angular.module('StoreModule', [])
    .controller('StoreController', function($scope, $http) {
        $http.get('http://localhost:8080/item').
            then(function(response) {
                $scope.itemList = response.data;
            });
    });