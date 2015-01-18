'use strict';

angular.module('core').factory('Atms', ['$resource', function($resource) {
  var baseUrl = 'http://localhost:3000/api/v1/atms';
  return $resource(baseUrl, null,
    {
        'update': { method:'PUT' },
        'query': {method: 'GET', url: baseUrl, isArray: true}
    }
  );
}]);