
angular.module('myApp')
    .controller('PlayerController2', ['$scope', 'Music', function ($scope, Music) {

      Music.get(function(data){
            $scope.songs = [];
            $scope.music = data.music;

            for (var i = 0; i < $scope.music.length; i++) {
              $scope.songs.push({id: $scope.music[i]._id,
                      title: $scope.music[i].title,
                      url: $scope.music[i].url});
            };

console.log($scope.songs);
          });
    }]);
