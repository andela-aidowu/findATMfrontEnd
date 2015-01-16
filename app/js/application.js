'use strict';

angular.module('findatm', 
  [
    'ngResource', 
    'ngCookies',  
    'ngAnimate',  
    'ngTouch',  
    'ngSanitize',  
    'ui.router', 
    'ui.bootstrap', 
    'ui.utils', 
    'core', 
    'users'
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    // Redirect to home view when route not found
    $urlRouterProvider.otherwise('/');
    // $locationProvider.html5Mode(true).hashPrefix('!');
    $locationProvider.hashPrefix('!');
  }
]);
