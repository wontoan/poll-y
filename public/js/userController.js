(function () {
  var app = angular.module('pollyApp');

  app.controller('userController', function ($scope, $http, $rootScope) {

    $http.get('/api/user').success(function (data) {
      var user = data;
      $scope.image = user.image;
    });
  });
}());