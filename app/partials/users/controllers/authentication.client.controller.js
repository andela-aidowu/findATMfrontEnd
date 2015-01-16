'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$http', '$location', 'Authentication',
	function($scope, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		// If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		$scope.signup = function() {
      var options = {
        method: 'POST',
        url: 'http://localhost:3000/auth/signup',
        data: $.param($scope.credentials),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };
      $http(options).success(
        function (data, status, headers, config) {
        //do something
        $scope.authentication.user = data;

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
  		  url: 'http://localhost:3000/auth/signin',
  		  data: $.param($scope.credentials),
  		  headers: {
      	 'Content-Type': 'application/x-www-form-urlencoded'
  		  }
  		};
  		$http(options).success(
  		  function (data, status, headers, config) {
          //do something
          $scope.authentication.user = data;
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