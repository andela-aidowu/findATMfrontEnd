'use strict';

angular.module('users').controller('SettingsController', ['$scope', '$http', 'appUrl', '$location', 'Users', 'Authentication',
	function($scope, $http, appUrl, $location, Users, Authentication) {
		$scope.user = Authentication.user;

		// If user is not signed in then redirect back home
		if (!$scope.user) $location.path('signin');

		// Check if there are additional accounts 
		$scope.hasConnectedAdditionalSocialAccounts = function(provider) {
			for (var i in $scope.user.additionalProvidersData) {
				return true;
			}

			return false;
		};

		// Check if provider is already in use with current user
		$scope.isConnectedSocialAccount = function(provider) {
			return $scope.user.provider === provider || ($scope.user.additionalProvidersData && $scope.user.additionalProvidersData[provider]);
		};

		// Remove a user social account
		$scope.removeUserSocialAccount = function(provider) {
			$scope.success = $scope.error = null;

			$http.delete(appUrl.baseUrl + '/users/accounts', {
				params: {
					provider: provider
				}
			}).success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				$scope.user = Authentication.user = response;
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		// Update a user profile
		$scope.updateUserProfile = function(isValid) {
			console.log($scope.user);
			if (isValid) {
				$scope.success = $scope.error = null;
	  		var options = {
	  		  method: 'PUT',
	  		  url: appUrl.baseUrl + 'users',
	  		  data: $scope.user,
	  		  headers: {
	      	 'Content-Type': 'application/x-www-form-urlencoded'
	  		  }
	  		};
	  		$http(options).success(
	  		  function (data, status, headers, config) {
	          //do something
	          $scope.success = true;
	          Authentication.user = data;
	  		  	// And redirect to the index page
	  	   		$location.path('/');
	    		}
	  		).error(
	  		  function (data, status, headers, config) {
	        console.log(data);
	        //do something
	        $scope.error = data;
	      });
				// var user = new Users($scope.user);

				// user.$update(function(response) {
				// 	$scope.success = true;
				// 	Authentication.user = response;
				// }, function(response) {
				// 	$scope.error = response.data.message;
				// });
			} else {
				$scope.submitted = true;
			}
		};

		// Change user password
		$scope.changeUserPassword = function() {
			$scope.success = $scope.error = null;

			$http.post(appUrl.baseUrl + '/users/password', $scope.passwordDetails).success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				$scope.passwordDetails = null;
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);