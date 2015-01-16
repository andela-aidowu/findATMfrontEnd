'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$http', 'Authentication', 'Menus',
  function($scope, $http, Authentication, Menus) {
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
      console.log($scope.authentication.user);
      var options = {
        method: 'POST',
        url: 'http://localhost:3000/auth/signout',
        data: $.param($scope.authentication.user),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };
      $http(options).success(
        function (data, status, headers, config) {
        //do something
        // $scope.authentication.user = undefined;

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