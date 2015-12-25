(function () {
  var app = angular.module('pollyApp');

  app.controller('mainController', function ($scope, $http, $rootScope) {

    //Get all polls
    $http.get('/api/polls').success(function (data) {
      console.log(data);
      $scope.polls = data;
    });    
  });
}());

