'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'appUrl', '$http', 'Authentication', 'Menus',
  function($scope, appUrl, $http, Authentication, Menus) {
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
        method: 'POST',
        url: appUrl.baseUrl,
        data: $.param($scope.authentication.user),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };
      $http(options).success(
        function (data, status, headers, config) {
          //do something
          // $scope.authentication.user = undefined;
          Authentication.user = data;
          // And redirect to the index page
          $location.path('/');
        }
      ).error(
        function (data, status, headers, config) {
          //do something
          // console.log(status);
          // console.log(headers, config);
          $scope.error = data.message;
      });
    };
  }
]);