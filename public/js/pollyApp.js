(function () {
  'use strict';
  var app = angular.module('pollyApp', ['ngRoute', 'ngResource']).run(function ($rootScope, $http) {
    
    $rootScope.authenticated = false;
    $rootScope.currentUser = "";
    
    $rootScope.logout = function () {
      $http.get('/auth/logout');
      $rootScope.authenticated = false;
      $rootScope.currentUser = "";
    };
  });
  
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main.html',
        controller: 'mainController'
      })
    
      .when('/login', {
        templateUrl: 'auth.html'
      })
    
      .when('/new', {
        templateUrl: 'newpoll.html',
        controller: 'pollController'
      })
    
      .when('/success', {
        templateUrl: 'success.html',
        controller: 'mainController'
      })
      
      .when('/view', {
        templateUrl: 'viewpoll.html',
        controller: 'pollController'
      })
    
      .when('/profile', {
        templateUrl: 'profile.html',
        controller: 'mainController'
      });
  });
  
  app.controller('pollController', function ($scope, $http, $rootScope) {
    //Temp in-memory storage until backend is built
    $scope.polls = [{title: "What should I get mom for her birthday?", option1: "DEF", option2: "GHI"}, {title: "What should I eat tonight?", option1: "DEF", option2: "GHI"}];
    $scope.newPoll = {};
    
    $scope.newPoll = function () {
      $scope.polls.push($scope.newPoll);
      $scope.newPoll = {};
    };
  });
  
  app.controller('mainController', function ($scope, $http, $rootScope) {
    $http.get('/api/me').success(function (data) {
        console.log(data);
        var user = data;
        $rootScope.authenticated = true;
        $rootScope.displayName = user.displayName;
        $scope.image = user.image;
      });
  });
}());