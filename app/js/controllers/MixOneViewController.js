angular.module('myApp')
.controller('MixOneViewController', ['$scope', '$state', '$window', 'Genre', '$stateParams', function($scope, $state, $window, Genre, $stateParams) {
  //$scope.albumsList = AlbumsView.get1();


  Genre.get({action:$stateParams.id}, function(data){
        $scope.songs = [];
        $scope.genre= data.genre;
        console.log($scope.genre);
        console.log($scope.songs);
        for (var i = 0; i < $scope.genre.length; i++) {
          $scope.songs.push({id: $scope.genre[i]._id,
                  title: $scope.genre[i].title,
                  url: $scope.genre[i].url});
        };

  console.log($scope.songs);
});
}]);
