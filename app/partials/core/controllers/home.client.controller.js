'use strict';


angular.module('core').controller('HomeController', ['$scope','Atms', 'Authentication', 
	function($scope, Atms, Authentication, $log) {
    var Userlng, Userlat;
		// This provides Authentication context.
		$scope.authentication = Authentication;
    console.log($scope.authentication);
    $scope.errorMessage = "";
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else { 
        $scope.messageTitle = 'Error!';
        $scope.message = "Geolocation is not supported by this browser.";
      }
    }
    function showPosition(position) {
      Userlat = position.coords.latitude;
      Userlng = position.coords.longitude;
      getAtms();
    }
    function showError(error) {
      switch(error.code) {
        case error.PERMISSION_DENIED:
          $scope.messageTitle = 'Error!';
          $scope.errorMessage = "You denied the request for Geolocation, please accept to get accurate nearby ATMs";
          break;
        case error.POSITION_UNAVAILABLE:
          $scope.messageTitle = 'Error!';
          $scope.errorMessage = "Location information is unavailable.";
          break;
        case error.TIMEOUT:
          $scope.messageTitle = 'Error!';
          $scope.errorMessage = "The request to get your location timed out.";
          break;
        case error.UNKNOWN_ERROR:
          $scope.messageTitle = 'Error!';
          $scope.errorMessage = "An unknown error occurred.";
          break;
      }
      $scope.$apply();
    }
    getLocation();
    function getAtms() {
      $scope.atms = Atms.all.query({lng: Userlng, lat: Userlat});
      $scope.atms.$promise.then(function(data) {
        $scope.atms = data;
        console.log($scope.atms);
        $scope.totalItems = data.length;
        $scope.itemsPerPage = 10;
        $scope.currentPage = 1;
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
    
    
	}
]);