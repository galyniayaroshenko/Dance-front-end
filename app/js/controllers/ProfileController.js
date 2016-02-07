angular.module('myApp')
  .controller('ProfileController', ['$scope', '$state', '$stateParams', 'Profile', 'currentUserService',  function($scope, $state, $stateParams, Profile, currentUserService) {
console.log("wow");
    console.log($stateParams.id);
    $scope.viewProf = currentUserService.user();
    console.log($scope.viewProf);
    $scope.viewProfile = Profile.get({action : $stateParams.id});
    console.log($scope.viewProfile);

$scope.signout = function() {
  console.log('logout');
  Profile.logOut({action: 'logout'});
  currentUserService.signout();

}
  }]);
