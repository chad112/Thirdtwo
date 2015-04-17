var myControllers = angular.module('myControllers', []);
		
myControllers.controller('mainCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }]);