(function () {
  'use strict';
  var app = angular.module('pollyApp', ['ngRoute']);
  
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'newpoll.html',
        controller: 'pollController'
      })
    
      .when('/login', {
        templateUrl: 'auth.html',
        controller: 'authController'
      })
    
      .when('/success', {
        templateUrl: 'success.html',
        controller: 'pollController'
    })
    
      .when('/profile', {
        templateUrl: 'profile.html',
        controller: 'authController'
      })
    
      .when('/allpolls', {
        templateUrl: 'allpolls.html',
        controller: 'pollController'
      });
  });
  
  app.controller('pollController', function ($scope) {
    //Temp in-memory storage until backend is built
    $scope.polls = [{title: "What should I get mom for her birthday?", option1: "DEF", option2: "GHI"}, {title: "What should I eat tonight?", option1: "DEF", option2: "GHI"}];
    $scope.newPoll = {};
    $scope.newPoll = function () {
      $scope.polls.push($scope.newPoll);
      $scope.newPoll = {};
    };
  });
  
  app.controller('authController', function ($scope) {
    $scope.message = "ahaha";
  });
}());