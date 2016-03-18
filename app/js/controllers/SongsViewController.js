angular.module('myApp')
  .controller('SongsViewController', ['$scope','$stateParams', 'Music',
    function($scope, $stateParams, Music) {
    $scope.viewMusic = Music.get({ action: $stateParams.id }, function(data){
      $scope.song = {};
       $scope.music= data;
          $scope.song.id = $scope.music.objectId;
          $scope.song.title = $scope.music.title;
          $scope.song.url = $scope.music.songs.url;
        });
  }]);
