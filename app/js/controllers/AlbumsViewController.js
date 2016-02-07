angular.module('myApp')
.controller('AlbumsViewController', ['$scope', '$state', '$window', 'AlbumsView', '$stateParams', function($scope, $state, $window, AlbumsView, $stateParams) {
  //$scope.albumsList = AlbumsView.get1();


  AlbumsView.get({action:$stateParams.id}, function(data){
        $scope.songs = [];
        $scope.albums= data.albums;
        console.log($scope.albums);
        console.log($scope.songs);
        for (var i = 0; i < $scope.albums.length; i++) {
          $scope.songs.push({id: $scope.albums[i]._id,
                  title: $scope.albums[i].title,
                  url: $scope.albums[i].url});
        };

  console.log($scope.songs);
});
}]);
