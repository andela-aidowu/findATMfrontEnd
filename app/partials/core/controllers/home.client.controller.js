'use strict';


angular.module('core').controller('HomeController', ['$scope','Atms', 'Authentication', 
	function($scope, Atms, Authentication, $log) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
    $scope.atms = Atms.query({lng: '3.3850064', lat: '6.5073927'});
    $scope.atms.$promise.then(function(data) {
      $scope.atms = data;
      $scope.totalItems = data.length;
      $scope.itemsPerPage = 10;
      $scope.currentPage = 2;
      $scope.figureOutAtmsToDisplay = function() {
        var begin = (($scope.currentPage - 1) * $scope.itemsPerPage);
        var end = begin + $scope.itemsPerPage;
        $scope.filteredAtms = $scope.atms.slice(begin, end);
      };
      $scope.figureOutAtmsToDisplay();
      $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
      };
      $scope.pageChanged = function() {
        $scope.figureOutAtmsToDisplay();
      };
    });
    
	}
]);
