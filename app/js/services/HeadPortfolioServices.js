angular.module('myApp')
.factory('HeadPortfolio', [
  '$resource', 'host',
  function ($resource, host) {
    var link = host + 'classes/headPortfolio/:action';
    return $resource(link, { action: '@action'}, {
      get: { method: 'GET', params: { action: '@action' }},
      get1: { method: 'GET', params: { action: '@action' }},
      delete: {method: 'DELETE', params: { action: '@action' } },
      update: { method: 'PUT',  params: { action: '@action'  } },
      id: {method: 'GET', params: { action: '$resource.id' } }
    });
  }]);
