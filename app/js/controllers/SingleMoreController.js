angular.module('myApp')
  .controller('SingleMoreController', ['$scope','$stateParams', 'AboutUs',
    function($scope, $stateParams, AboutUs) {
      AboutUs.get({action: $stateParams.id }, function(data) {
        $scope.viewAboutUs = data;
      });
  }]);
