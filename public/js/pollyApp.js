(function () {
  'use strict';
  var app = angular.module('pollyApp', ['ngRoute', 'ngResource', 'chart.js']).run(function ($rootScope, $http) {

    $rootScope.authenticated = false;
    $rootScope.currentUser = '';

    $rootScope.logout = function () {
      $http.get('/auth/logout');
      $rootScope.authenticated = false;
      $rootScope.currentUser = '';
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

    $scope.polls = [
      {
        labels: ['Apple', 'Orange'],
        data: [[10, 5]]
      }
    ];

    $scope.newPoll = {};

    $scope.createPoll = function () {
      $scope.newPoll.data = [[20, 10]];
      $scope.polls.push($scope.newPoll);
      console.log($scope.newPoll);
      $scope.newPoll = {};
    };
  });

  app.controller('mainController', function ($scope, $http, $rootScope) {
    $http.get('/api/user').success(function (data) {
      console.log(data);
      var user = data;
      $rootScope.authenticated = true;
      $rootScope.displayName = user.displayName;
      $scope.image = user.image;
    });
  });
}());