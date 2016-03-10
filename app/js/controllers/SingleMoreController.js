angular.module('myApp')
  .controller('SingleMoreController', ['$scope','$stateParams', 'AboutUs', function($scope, $stateParams, AboutUs) {
    console.log($stateParams.id);
    AboutUs.get({action: $stateParams.id }, function(data) {
      console.log('AboutUsssss', data);
      $scope.viewAboutUs = data;
    });
    console.log('$scope.viewAboutUs', $scope.viewAboutUs);

  }]);
