'use strict';

// Setting up route
angular.module('core', []).config(['$stateProvider', '$urlRouterProvider', 'appUrl', 
	function($stateProvider, $urlRouterProvider, appUrl) {

		// Home state routing
		$stateProvider.
		state('home', {
			url: appUrl.githubUrl + '/',
			templateUrl: 'app/partials/core/views/home.client.view.html'
		}).
    state('add-atm', {
      url: appUrl.githubUrl + '/atm/add',
      templateUrl: 'app/partials/core/views/add-atm.client.view.html'
    });
	}
]);