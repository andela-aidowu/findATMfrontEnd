'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$location', '$http', 'Authentication', 'Menus',
	function($scope, Authentication, Menus, $http, $location) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});

		$scope.signout = function() {
			var options = {
    		method: 'GET',
    		url: 'http://localhost:3000/auth/signout',
			};
			$http(options).success(
    		function (data, status, headers, config) {
        //do something
				$location.path('/');
    		}
			).error(
    		function (data, status, headers, config) {
        $scope.error = data.message;
    	});
		};
	}
]);