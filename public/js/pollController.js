(function () {
  var app = angular.module('pollyApp');

  app.controller('pollController', function ($scope, $http, $rootScope, $location, $routeParams) {
    $scope.newPoll = {
      title: '',
      labels: [],
      createdBy: '',
      data: [[0,0]]
    };

    //Create a new poll
    $scope.createPoll = function () {
      $scope.newPoll.createdBy = $rootScope.currentUser;

      $http.post('api/polls', $scope.newPoll)
        .success(function (data) {

          $scope.newPoll = {
            title: '',
            labels: [],
            createdBy: '',
            data: [[0,0]]
          };
          $location.path('/');
        });
    };

    $http.get('/api/polls/' + $routeParams.id).success(function(data) {
      $scope.votingPoll = data;
    });
    
    $scope.submitVote = function () {
      $http.put('/api/polls/' + $routeParams.id);
    };
    
  });
}());