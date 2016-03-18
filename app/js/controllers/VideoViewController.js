angular.module('myApp')
  .controller('VideoViewController', ['$scope','$stateParams', 'Video', '$sce',
    function($scope, $stateParams, Video, $sce) {
      $scope.viewVideo = Video.get({ action: $stateParams.id }, function(data){
        $scope.viewVideo = data;
        $scope.viewVideo.video = $sce.trustAsHtml($scope.viewVideo.video);
        });
  }]);
