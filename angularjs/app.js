var myApp = angular.module('myApp', ['ngAnimate']);
myApp.controller('ItemCtrl', function ($scope) {
    $scope.items = [];
    $scope.submit = function () {
        $scope.items.push($scope.newItem);
        $scope.newItem = '';
    };
});
