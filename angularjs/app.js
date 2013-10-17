'use strict';

var EditPage = angular.module("myapp", [], function () {
    }
);

function ItemCtrl ($scope) {
    $scope.items = [];

    $scope.submit = function () {
        $scope.items.push($scope.newItem);
        $scope.newItem = '';
    };
}
