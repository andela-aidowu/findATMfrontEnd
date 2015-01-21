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
    if (!$scope.authentication.user) {
      $scope.messageTitle = 'Error! 403!';
        $scope.message = 'You can not create an ATM, please create an account or login';
        return;
    }
    Atms.all.save({token: $scope.authentication.user.token}, $scope.atm, function(atm) {
      $scope.atm = {};
      $scope.messageTitle = 'Success!';
      $scope.message = 'Atm point added succesfully';
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
    if ($scope.atm.user !== $scope.authentication.user.username || $scope.authentication.user.username !== 'admin') {
      $scope.messageTitle = 'Error! 403!';
        $scope.message = 'You can not allowed to edit this ATM';
        return;
    }
    Atms.one.update({id: $scope.atm._id}, $scope.atm, function(atm) {
      $scope.messageTitle = 'Success!';
      $scope.message = 'Atm point updated succesfully';
    }, function(err) {
      $scope.messageTitle = 'Error!';
      $scope.message = 'Error occured, Atm was not saved';
    });
  };
}]);