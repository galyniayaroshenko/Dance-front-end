angular.module('myApp')
.controller('SongsListController', ['$scope', '$state', '$window', 'Music', '$rootScope',
  function($scope, $state, $window, Music, $rootScope) {
    $scope.load = "loading";
  $scope.musicList = Music.get(function(data){
    $scope.load = '';
    $scope.songs = [];
    $scope.musicList = data.results;
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
      $scope.songs = [];
      for (var i = 0; i < $scope.musicList.length; i++) {

        $scope.songs.push({id: $scope.musicList[i].objectId,
          title: $scope.musicList[i].languageTitle,
          url: $scope.musicList[i].songs.url,
          description: $scope.musicList[i].descriptionLan,
          img: $scope.musicList[i].img.url});
        };
    });
    });
}]);
