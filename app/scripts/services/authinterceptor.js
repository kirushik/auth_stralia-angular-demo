'use strict';

/**
 * @ngdoc service
 * @name angularDemoApp.authInterceptor
 * @description
 * # authInterceptor
 * Factory in the angularDemoApp.
 */
angular.module('angularDemoApp')
  .factory('authInterceptor', function ($window) {
    return {
      request: function (config) {
        config.headers = config.headers || {};
        if ($window.sessionStorage.token) {
          config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
        }
        console.log(config);
        return config;
      },
      response: function (response) {
        if (response.status === 401) {
          // handle the case where the user is not authenticated
        }
        return response || $q.when(response);
      }
    };
  });
