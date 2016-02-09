angular.module('myApp')
  .controller('VideoViewController', ['$scope','$stateParams', 'Video', '$sce',
    function($scope, $stateParams, Video, $sce) {
    console.log($stateParams.id);
    $scope.viewVideo = Video.get({ action: $stateParams.id }, function(data){
      $scope.viewVideo = data;
      console.log('vid', $scope.viewVideo);
      $scope.viewVideo.video = $sce.trustAsHtml($scope.viewVideo.video);
      });

    console.log('smile');
  }]);
