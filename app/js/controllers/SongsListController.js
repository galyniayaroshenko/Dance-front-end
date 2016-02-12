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
    // $scope.songs = [
    //         {
    //             id: 'one',
    //             title: 'Rain',
    //             artist: 'Drake',
    //             url: 'http://www.schillmania.com/projects/soundmanager2/demo/_mp3/rain.mp3'
    //         },
    //         {
    //             id: 'two',
    //             title: 'Walking',
    //             artist: 'Nicki Minaj',
    //             url: 'http://www.schillmania.com/projects/soundmanager2/demo/_mp3/walking.mp3'
    //         },
    //         {
    //             id: 'three',
    //             title: 'Barrlping with Carl (featureblend.com)',
    //             artist: 'Akon',
    //             url: 'http://www.freshly-ground.com/misc/music/carl-3-barlp.mp3'
    //         },
    //         {
    //             id: 'four',
    //             title: 'Angry cow sound?',
    //             artist: 'A Cow',
    //             url: 'http://www.freshly-ground.com/data/audio/binaural/Mak.mp3'
    //         },
    //         {
    //             id: 'five',
    //             title: 'Things that open, close and roll',
    //             artist: 'Someone',
    //             url: 'http://www.freshly-ground.com/data/audio/binaural/Things%20that%20open,%20close%20and%20roll.mp3'
    //         }
    //     ];
    });

}]);
