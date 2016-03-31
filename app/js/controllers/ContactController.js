angular.module('myApp')
.controller('ContactController', ['$scope', '$state', '$window', 'Contact', '$rootScope',
  function($scope, $state, $window, Contact, $rootScope) {
    $scope.load = "loading";
  $scope.contactList = Contact.get(function(data){
    $scope.load = '';
    $scope.contactList = data.results;
    $rootScope.$watch('arg', function() {
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
    });
    });
}]);
