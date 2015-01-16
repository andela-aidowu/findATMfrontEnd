'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$http', '$location', 'Authentication',
	function($scope, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		// If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		$scope.signup = function() {
			$http.post('http://localhost:3000/auth/signup', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		$scope.signin = function() {
			console.log($scope.credentials);
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
        console.log(data);

				// And redirect to the index page
				$location.path('/');
    		}
			).error(
    		function (data, status, headers, config) {
        //do something
        console.log(data);
        // console.log(status);
        // console.log(headers, config);
        $scope.error = data.message;
    	});
		};
	}
]);