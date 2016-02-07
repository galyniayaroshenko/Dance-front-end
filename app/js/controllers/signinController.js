angular.module('myApp')
  .controller('signinController', [
    '$scope', '$state', '$localStorage', '$rootScope', 'User',
  function ($scope, $state, $localStorage, $rootScope, User){

$scope.user = {};

// $scope.signin = function () {
//   console.log($scope.user);
// }
console.log($localStorage);


$scope.signin = function () {
  // console.log($scope.user);
  User.signin($scope.user, function (result) {
    if (result.user == null) {
           $scope.message ='email address or password you entered is not correct';
         }else {


         $rootScope.token = result.user.accessToken;
         $localStorage.token = result.user.accessToken;
         $localStorage.user = result.user;


         if ($localStorage.token && $localStorage.token != null) {
             $state.go('acount.signin');
         }
         }
       });

}



  }]);
