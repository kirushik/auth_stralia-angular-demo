'use strict';

/**
 * @ngdoc function
 * @name angularDemoApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularDemoApp
 */
angular.module('angularDemoApp')
  .controller('LoginCtrl', function ($scope) {
    $scope.user = { email: "", password: ""};

    $scope.submit = function(){
      console.log($scope.user);
    }
  });
