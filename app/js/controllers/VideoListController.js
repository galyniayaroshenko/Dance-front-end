angular.module('myApp')
.controller('VideoListController', ['$scope', '$state', '$window', 'Video', function($scope, $state, $window, Video) {
  //$scope.musicList = Music.get();
  $scope.videoList = Video.get(function(data){
    $scope.videoList = data.results;
    console.log($scope.videoList);
    });
console.log("smile");
}]);
