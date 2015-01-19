'use strict';

angular.module('core').factory('Atms', ['$resource', 'appUrl', function($resource, appUrl) {
  var baseUrl = appUrl.apiEndpoint;
  return {
    all: $resource(baseUrl, null, {
        'update': { method:'PUT' },
        'query': {method: 'GET', url: baseUrl, isArray: true}
    }),
    states: $resource(baseUrl + 'states', null, {
      'get': {method: 'GET', isArray: true}
    }),
    banks: $resource(baseUrl + 'banks', null, {
      'get': {method: 'GET', isArray: true}
    })
  };
}]);