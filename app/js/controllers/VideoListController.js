angular.module('myApp')
.controller('VideoListController', ['$scope', '$state', '$window', 'Video', '$sce',
  function($scope, $state, $window, Video, $sce) {
  //$scope.musicList = Music.get();
  $scope.videoList = Video.get(function(data){
    $scope.videoList = data.results;
    console.log($scope.videoList);
    for (var i = 0; i < $scope.videoList.length; i++) {
      $scope.videoList[i].video = $sce.trustAsHtml($scope.videoList[i].video);
    }
    });
console.log("smile");
}]);
