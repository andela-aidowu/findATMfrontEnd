'use strict';

// Users service used for communicating with the users REST endpoint
// angular.module('users').factory('Users', ['$resource',
// 	function($resource) {
// 		return $resource('users', {}, {
// 			update: {
// 				method: 'PUT'
// 			}
// 		});
// 	}
// ]);
angular.module('users').factory('Users', ['$resource', 'appUrl', function($resource, appUrl) {
  return $resource(appUrl.baseUrl + 'users', null,
    {
        'update': { method:'PUT' }
    },
    {
      stripTrailingSlashes: false
    });
}]);