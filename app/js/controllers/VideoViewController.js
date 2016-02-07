angular.module('myApp')
  .controller('VideoViewController', ['$scope','$stateParams', 'Video', function($scope, $stateParams, Video) {
    console.log($stateParams.id);
    $scope.viewVideo = Video.get({ action: $stateParams.id });
    console.log($scope.viewVideo);
    console.log('smile');
  }]);
