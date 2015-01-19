'use strict';

// Setting up route
angular.module('core', []).config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/findATMfrontEnd/',
			templateUrl: 'app/partials/core/views/home.client.view.html'
		}).
    state('add-atm', {
      url: '/findATMfrontEnd/atm/add',
      templateUrl: 'app/partials/core/views/add-atm.client.view.html'
    });
	}
]);