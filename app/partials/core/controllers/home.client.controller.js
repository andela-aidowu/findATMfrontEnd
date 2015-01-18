'use strict';


angular.module('core').controller('HomeController', ['$scope','Atms', 'Authentication', 
	function($scope, Atms, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
    $scope.atms = Atms.query({lng: '3.3850064', lat: '6.5073927'});
    $scope.atms.$promise.then(function(data) {
      $scope.atms = data;
    });
	}
]);