'use strict';

/**
 * @ngdoc overview
 * @name sacramentApp
 * @description
 * # sacramentApp
 *
 * Main module of the application.
 */

/* global app:true */
/* exported app */

var app = angular.module('sacramentApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/createAgenda'
      })
      .when('/createAgenda', {
        templateUrl: 'views/createAgenda.html',
        controller: 'CreateAgendaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.directive('blurOnClick', [function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            element.on('click', function () {
                element.blur();
            });
        }
    };
}]);