'use strict';

/**
 * @ngdoc function
 * @name angularDemoApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the angularDemoApp
 */
angular.module('angularDemoApp')
  .controller('ProfileCtrl', function ($scope, $window, $location, $http) {
    if(!$window.sessionStorage.token) {
      $location.path('/login');
    }

    $scope.sessions = {active:['A', 'B', 'C']};

    $scope.refresh = function(){
      $http.get('http://localhost:8080/api/V1/session/list')
        .success(function (data, status, headers, config) {
            $scope.sessions.active = data;
          });
    };
  });
