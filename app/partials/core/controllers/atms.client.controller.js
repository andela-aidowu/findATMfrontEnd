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
    // $scope.atm.bank = $scope.banks[4]._id;
  });
  $scope.addAtm = function() {
    Atms.all.save({token: $scope.authentication.user.token}, $scope.atm, function(atm) {
      $scope.atm = {};
    }, function(error) {
      $scope.messageTitle = 'Error!';
      $scope.message = "ATM Point could not be save, Please review your input and try again";
    });
  };
}]);

angular.module('core').controller('editAtmController', ['$scope','Atms', 'Authentication', '$stateParams', function($scope, Atms, Authentication, $stateParams) {
  Atms.one.get({id: $stateParams.id}, function(states) {
    $scope.atm = states;
    getData();
  });
  function getData () {
    $scope.states = Atms.states.get({});
    $scope.states.$promise.then(function(data) {
      $scope.states = data;
      $scope.atm.state = $scope.atm.state._id;
    });
    $scope.banks = Atms.banks.get({});
    $scope.banks.$promise.then(function(data) {
      $scope.banks = data;
      $scope.atm.bank_name = $scope.atm.bank_name._id;
    });
  }
  $scope.editAtm = function () {
    Atms.one.updae({id: $scope.atm._id}, $scope.atm, function(atm) {
      $scope.messageTitle = 'Success!';
      $scope.message = 'Atm point updated succesfully';
    }, function(err) {
      $scope.messageTitle = 'Error!';
      $scope.message = 'Error occured, Atm was not saved';
    });
  };
}]);