angular.module('myApp')
.controller('ContactController', ['$scope', '$state', '$window', 'Contact', function($scope, $state, $window, Contact) {
  //$scope.musicList = Music.get();
  $scope.contactList = Contact.get(function(data){
    $scope.contactList = data.results;
    console.log('cont', $scope.contactList);
    });
console.log("smile");
}]);
