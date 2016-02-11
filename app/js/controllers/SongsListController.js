angular.module('myApp')
.controller('SongsListController', ['$scope', '$state', '$window', 'Music', function($scope, $state, $window, Music) {
  //$scope.musicList = Music.get();
  $scope.musicList = Music.get(function(data){
    $scope.songs = [];
    $scope.musicList = data.results;
    console.log('list', $scope.musicList);
    for (var i = 0; i < $scope.musicList.length; i++) {
          $scope.songs.push({id: $scope.musicList[i].objectId,
                  title: $scope.musicList[i].title,
                  url: $scope.musicList[i].songs.url});
        };
        console.log('so', $scope.songs);
    });

}]);
