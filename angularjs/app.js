'use strict';

function ItemCtrl ($scope) {
    $scope.items = [];

    $scope.submit = function () {
        $scope.items.push($scope.newItem);
        $scope.newItem = '';
    };
}
