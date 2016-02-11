angular.module('myApp')
  .controller('SongsViewController', ['$scope','$stateParams', 'Music', function($scope, $stateParams, Music) {
    console.log($stateParams.id);
    $scope.viewMusic = Music.get({ action: $stateParams.id }, function(data){
$scope.song = {};
       $scope.music= data;
        console.log('mm', $scope.music);
         //console.log('asd', data);
        console.log('ss', $scope.music);

          $scope.song.id = $scope.music.objectId;
          $scope.song.title = $scope.music.title;
          $scope.song.url = $scope.music.songs.url;


  console.log('os', $scope.song);
});
    console.log('soV', $scope.viewMusic);
    //console.log('sog', $scope.viewMusic.songs);

  }]);
