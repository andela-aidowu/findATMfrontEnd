'use strict';

// Setting up route
angular.module('users').config(['$stateProvider', 'appUrl',
	function($stateProvider, appUrl) {
		// Users state routing
		$stateProvider.
		state('profile', {
			url: appUrl.githubUrl + '/settings/profile',
			templateUrl: 'app/partials/users/views/settings/edit-profile.client.view.html'
		}).
		state('password', {
			url: appUrl.githubUrl +  '/settings/password',
			templateUrl: 'app/partials/users/views/settings/change-password.client.view.html'
		}).
		state('accounts', {
			url: appUrl.githubUrl + '/settings/accounts',
			templateUrl: 'app/partials/users/views/settings/social-accounts.client.view.html'
		}).
		state('signup', {
			url: appUrl.githubUrl + '/signup',
			templateUrl: 'app/partials/users/views/authentication/signup.client.view.html'
		}).
		state('signin', {
			url: appUrl.githubUrl + '/signin',
			templateUrl: 'app/partials/users/views/authentication/signin.client.view.html'
		}).
		state('forgot', {
			url: appUrl.githubUrl + '/password/forgot',
			templateUrl: 'app/partials/users/views/password/forgot-password.client.view.html'
		}).
		state('reset-invalid', {
			url: appUrl.githubUrl + '/password/reset/invalid',
			templateUrl: 'app/partials/users/views/password/reset-password-invalid.client.view.html'
		}).
		state('reset-success', {
			url: appUrl.githubUrl + '/password/reset/success',
			templateUrl: 'app/partials/users/views/password/reset-password-success.client.view.html'
		}).
		state('reset', {
			url: appUrl.githubUrl + '/password/reset/:token',
			templateUrl: 'app/partials/users/views/password/reset-password.client.view.html'
		});
	}
]);