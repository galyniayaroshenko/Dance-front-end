// angular.module('myApp')
// .factory('currentUserService', [
//   '$state', '$rootScope', '$localStorage', 'User',
//   function($state, $rootScope, $localStorage, User) {
//     return {
//       user: function () {
//         return $localStorage.user;
//       },
//
//       signout: function () {
//         delete $localStorage.user;
//         delete $localStorage.token;
//         delete $rootScope.token;
//         $state.go('acount.signin');
//       },
//
//       update: function (user, cb) {
//         User.update(user, function (user) {
//           $localStorage.user = user;
//           cb(user);
//         });
//       },
//
//       updatePassword: function (pass, cb) {
//         User.updatePassword(pass, function (status) {
//           console.log(status);
//         });
//       }
//     };
//   }]);
