angular.module('myApp')
.controller('SongsListController', ['$scope', '$state', '$window', 'Music', '$rootScope',
  function($scope, $state, $window, Music, $rootScope) {
  //$scope.musicList = Music.get();
  $scope.musicList = Music.get(function(data){
    $scope.songs = [];
    $scope.musicList = data.results;
    console.log('list', $scope.musicList);

    $rootScope.$watch('arg', function() {
      for (var i = 0; i < $scope.musicList.length; i++) {
        if ($rootScope.arg === "English"){
          $scope.musicList[i].languageTitle = $scope.musicList[i].title_en;
          $scope.musicList[i].descriptionLan = $scope.musicList[i].description_en;

        } else {
          $scope.musicList[i].languageTitle = $scope.musicList[i].title;
          $scope.musicList[i].descriptionLan = $scope.musicList[i].description;

        }
      }
      console.log('!@#musicList', $scope.musicList);
      console.log('$scope.musicList.length', $scope.musicList.length);

      for (var i = 0; i < $scope.musicList.length; i++) {
        $scope.songs.push({id: $scope.musicList[i].objectId,
          title: $scope.musicList[i].languageTitle,
          url: $scope.musicList[i].songs.url,
          description: $scope.musicList[i].descriptionLan,
          img: $scope.musicList[i].img.url});
        };
        console.log('!@#so', $scope.songs);
    });


    });

}]);
