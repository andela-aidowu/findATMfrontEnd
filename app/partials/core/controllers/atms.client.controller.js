'use strict';

angular.module('core').controller('atmsController', ['$scope', 'Atms', '$location', 'Authentication', function($scope, Atms, $location, Authentication) {
  $scope.atm = {};
  $scope.atm.estimate = false;
  $scope.authentication = Authentication;
  if (!$scope.authentication.user) $location.path('signin');
  
  $scope.states = Atms.states.get({});
  $scope.states.$promise.then(function(data) {
    $scope.states = data;
  });
  $scope.banks = Atms.banks.get({});
  $scope.banks.$promise.then(function(data) {
    $scope.banks = data;
  });
  $scope.addAtm = function() {
    Atms.all.save({token: $scope.authentication.user.token}, $scope.atm, function(atm) {
      $scope.atm = {};
      $
    });
    console.log($scope.atm);
  };
}]);