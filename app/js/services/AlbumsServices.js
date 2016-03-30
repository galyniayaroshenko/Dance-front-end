// angular.module('myApp')
// .factory('Albums', [
//   '$resource', 'host',
//   function ($resource, host) {
//     var link = host + 'albums/:action';
//     return $resource(link, { action: '@action'}, {
//       get: { method: 'GET', params: { action: '@action' }},
//       get1: { method: 'GET', params: { action: '@action' }},
//       get2: { method: 'GET', params: { action: '@action' }},
//       delete: {method: 'DELETE', params: { action: '@action' } },
//       update: { method: 'PUT',  params: { action: '@action'  } },
//       id: {method: 'GET', params: { action: '$resource.id' } }
//     });
//   }]);
