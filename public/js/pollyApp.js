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

    $http.get('/api/user').success(function (data) {
      var user = data;
      $rootScope.currentUser = user.displayName;
      if ($rootScope.currentUser) {
        $rootScope.authenticated = true;
      }
    });
  });

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main.html',
        controller: 'mainController'
      })

      .when('/new', {
        templateUrl: 'newpoll.html',
        controller: 'pollController'
      })

      .when('/user', {
        templateUrl: 'user.html',
        controller: 'userController'
      })
      .otherwise({redirectTo:'/'});
  });

}());