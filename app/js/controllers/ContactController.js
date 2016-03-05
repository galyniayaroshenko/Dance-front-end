angular.module('myApp')
.controller('ContactController', ['$scope', '$state', '$window', 'Contact', '$rootScope',
  function($scope, $state, $window, Contact, $rootScope) {
  //$scope.musicList = Music.get();
  $scope.contactList = Contact.get(function(data){
    $scope.contactList = data.results;
    console.log('cont', $scope.contactList);

    $rootScope.$watch('arg', function() {
      console.log("rootscope",$rootScope.arg);
      console.log('ssslll', $scope.contactList);
      for (var i = 0; i < $scope.contactList.length; i++) {
        if ($rootScope.arg === "English"){
          $scope.contactList[i].name = $scope.contactList[i].name_en;
          $scope.contactList[i].street = $scope.contactList[i].street_en;
          $scope.contactList[i].headAddress = $scope.contactList[i].headAddress_en;

        } else {
          $scope.contactList[i].name = $scope.contactList[i].name;
          $scope.contactList[i].street = $scope.contactList[i].street;
          $scope.contactList[i].headAddress = $scope.contactList[i].headAddress;

        }
      }
      console.log('asasas', $scope.contactList);
    });


    });
console.log("smile");
}]);
