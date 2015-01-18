'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', 'appUrl', '$http', '$location', 'Authentication',
	function($scope, appUrl, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		// If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		$scope.signup = function() {
      var options = {
        method: 'POST',
        url: appUrl.baseUrl + 'auth/signup',
        data: $.param($scope.credentials),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };
      $http(options).success(
        function (data, status, headers, config) {
        //do something
        $scope.authentication.user = data;
        Authentication.user = data;
        // And redirect to the index page
        $location.path('/');
        }
      ).error(
        function (data, status, headers, config) {
        //do something
        $scope.error = data.message;
      });
		};
  	$scope.signin = function() {
  		var options = {
  		  method: 'POST',
  		  url: appUrl.baseUrl + 'auth/signin',
  		  data: $.param($scope.credentials),
  		  headers: {
      	 'Content-Type': 'application/x-www-form-urlencoded'
  		  }
  		};
  		$http(options).success(
  		  function (data, status, headers, config) {
          //do something
          $scope.authentication.user = data;
           Authentication.user = data;
  		  	// And redirect to the index page
  	   		$location.path('/');
    		}
  		).error(
  		  function (data, status, headers, config) {
        //do something
        $scope.error = data.message;
      });
  	};
  }
]);