'use strict';

/**
 * @ngdoc function
 * @name angularDemoApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularDemoApp
 */
angular.module('angularDemoApp')
  .controller('LoginCtrl', function ($scope, $http, $window, $location) {
    $scope.user = { user_id: "a@b.c", password: "qwe"};

    $scope.submit = function(){
      $http
        .post( 'http://localhost:8080/api/V1/login',
               $.param($scope.user),
               {
                 headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
               }
             )
        .success(function (data, status, headers, config) {
          $window.sessionStorage.token = data;
          $location.path('/profile');
        })
        .error(function (data, status, headers, config) {
          // Erase the token if the user fails to log in
          delete $window.sessionStorage.token;

          // Handle login errors here
          $scope.message = 'Error: Invalid user or password';
      });

    }
  });
