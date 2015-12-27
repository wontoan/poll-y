(function () {
  'use strict';
  var app = angular.module('pollyApp', ['ngRoute', 'chart.js']).run(function ($rootScope, $http) {

    $rootScope.authenticated = false;
    $rootScope.currentUser = '';

    $rootScope.logout = function () {
      $http.get('/auth/logout');
      $rootScope.authenticated = false;
      $rootScope.currentUser = '';
    };

    $http.get('/api/user').success(function (data) {
      $rootScope.currentUser = data.displayName;
      $rootScope.userImage = data.image;
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
    
      .when('/user/:username', {
        templateUrl: 'user.html',
        controller: 'userController'
      })
    
      .when('/:username/:id', {
        templateUrl: 'vote.html',
        controller: 'pollController'
      })
      .otherwise({redirectTo:'/'});
  });

}());