angular.module('myApp')
.controller('VideoListController', ['$scope', '$state', '$window', 'Video', '$sce', '$rootScope',
  function($scope, $state, $window, Video, $sce, $rootScope) {
  //$scope.musicList = Music.get();
  $scope.videoList = Video.get(function(data){
    $scope.videoList = data.results;
    console.log($scope.videoList);

    $rootScope.$watch('arg', function() {
      for (var i = 0; i < $scope.videoList.length; i++) {
        if ($rootScope.arg === "English"){
          $scope.videoList[i].languageName = $scope.videoList[i].name_en;
          $scope.videoList[i].descriptionLan = $scope.videoList[i].description_en;
        } else {
          $scope.videoList[i].languageName = $scope.videoList[i].name;
          $scope.videoList[i].descriptionLan = $scope.videoList[i].description;
        }
      }
      console.log('zxcu!@#$', $scope.videoList[0].descriptionLan );


      for (var i = 0; i < $scope.videoList.length; i++) {
        $scope.videoList[i].video = $sce.trustAsHtml($scope.videoList[i].video);
      }
    });
    });
console.log("smile");
}]);
