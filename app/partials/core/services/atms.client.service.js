'use strict';

angular.module('core').factory('Atms', ['$resource', 'appUrl', function($resource, appUrl) {
  var baseUrl = appUrl.apiEndpoint;
  return $resource(baseUrl, null,
    {
        'update': { method:'PUT' },
        'query': {method: 'GET', url: baseUrl, isArray: true}
    }
  );
}]);