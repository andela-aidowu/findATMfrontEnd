'use strict';

// Setting up route
angular.module('users').config(['$stateProvider',
	function($stateProvider) {
		// Users state routing
		$stateProvider.
		state('profile', {
			url: '/findATMfrontEnd/settings/profile',
			templateUrl: 'app/partials/users/views/settings/edit-profile.client.view.html'
		}).
		state('password', {
			url: '/findATMfrontEnd/settings/password',
			templateUrl: 'app/partials/users/views/settings/change-password.client.view.html'
		}).
		state('accounts', {
			url: '/findATMfrontEnd/settings/accounts',
			templateUrl: 'app/partials/users/views/settings/social-accounts.client.view.html'
		}).
		state('signup', {
			url: '/findATMfrontEnd/signup',
			templateUrl: 'app/partials/users/views/authentication/signup.client.view.html'
		}).
		state('signin', {
			url: '/findATMfrontEnd/signin',
			templateUrl: 'app/partials/users/views/authentication/signin.client.view.html'
		}).
		state('forgot', {
			url: '/findATMfrontEnd/password/forgot',
			templateUrl: 'app/partials/users/views/password/forgot-password.client.view.html'
		}).
		state('reset-invalid', {
			url: '/findATMfrontEnd/password/reset/invalid',
			templateUrl: 'app/partials/users/views/password/reset-password-invalid.client.view.html'
		}).
		state('reset-success', {
			url: '/findATMfrontEnd/password/reset/success',
			templateUrl: 'app/partials/users/views/password/reset-password-success.client.view.html'
		}).
		state('reset', {
			url: '/findATMfrontEnd/password/reset/:token',
			templateUrl: 'app/partials/users/views/password/reset-password.client.view.html'
		});
	}
]);