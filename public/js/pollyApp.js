(function () {
  'use strict';
  var app = angular.module("pollyApp", []);
  
  app.controller('pollController', function ($scope) {
    //Temp in-memory storage until backend is built
    $scope.polls = [{title: "What should I get mom for her birthday?", option1: "DEF", option2: "GHI"}, {title: "What should I eat tonight?", option1: "DEF", option2: "GHI"}];
    $scope.newPoll = {};
    $scope.newPoll = function () {
      $scope.polls.push($scope.newPoll);
      $scope.newPoll = {};
    };
  });
  
  app.controller('authController', function($scope){
    $scope.users = [];
    $scope.newUser = {};
    $scope.register = function(){
      
    };
  });

}());