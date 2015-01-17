'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
    $scope.atms = atm;
	}
]);

var atm = [
  {
    "bank": "Access Bank",
    "Address": "No 2, Funho Street, Sabo-Yaba Lagos",
    "State": "Lagos State",
    "Estimate": "true",
    "Distance": "23km"
  },
  {
    "bank": "Access Bank",
    "Address": "No 2, Funho Street, Sabo-Yaba Lagos",
    "State": "Lagos State",
    "Estimate": "true",
    "Distance": "23km"
  },
  {
    "bank": "Access Bank",
    "Address": "No 2, Funho Street, Sabo-Yaba Lagos",
    "State": "Lagos State",
    "Estimate": "true",
    "Distance": "23km"
  },
  {
    "bank": "Access Bank",
    "Address": "No 2, Funho Street, Sabo-Yaba Lagos",
    "State": "Lagos State",
    "Estimate": "true",
    "Distance": "23km"
  },
  {
    "bank": "Access Bank",
    "Address": "No 2, Funho Street, Sabo-Yaba Lagos",
    "State": "Lagos State",
    "Estimate": "true",
    "Distance": "23km"
  },
  {
    "bank": "Access Bank",
    "Address": "No 2, Funho Street, Sabo-Yaba Lagos",
    "State": "Lagos State",
    "Estimate": "true",
    "Distance": "23km"
  },
  {
    "bank": "Access Bank",
    "Address": "No 2, Funho Street, Sabo-Yaba Lagos",
    "State": "Lagos State",
    "Estimate": "true",
    "Distance": "23km"
  },
  {
    "bank": "Access Bank",
    "Address": "No 2, Funho Street, Sabo-Yaba Lagos",
    "State": "Lagos State",
    "Estimate": "true",
    "Distance": "23km"
  },
];