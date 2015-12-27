(function () {
  var app = angular.module('pollyApp');

  app.controller('userController', function ($scope, $http, $routeParams, $rootScope) {
    
    $http.get('/api/polls').success(function (data) {
      $scope.userPolls = [];
      for (var i = 0; i < data.length; i++) {
        if (data[i].createdBy === $rootScope.currentUser) {
          $scope.userPolls.push(data[i]);
        }
      }
    });
    
  });
}());