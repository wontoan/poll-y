(function () {
  var app = angular.module('pollyApp');

  app.controller('pollController', function ($scope, $http, $rootScope) {

    $scope.newPoll = {title: '', labels: [], createdBy: '', data: [[0,0]]};

    //Create a new poll
    $scope.createPoll = function () {
      $scope.newPoll.createdBy = $rootScope.currentUser;
      $http.post('api/polls', $scope.newPoll)
        .success(function (data) {
          //If anything needs to be done with the newly created poll e.g. give us the share-able link + id
          $scope.newPoll = {title: '', labels: [], createdBy: '', data: [[0,0]]};
        });
    };
  });

}());