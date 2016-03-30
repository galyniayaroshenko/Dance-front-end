angular.module('myApp')
.controller('AlbumsViewController', ['$scope', '$state', '$window', 'AlbumsView', '$stateParams',
  function($scope, $state, $window, AlbumsView, $stateParams) {
    AlbumsView.get({action:$stateParams.id}, function(data){
          $scope.songs = [];
          $scope.albums= data.albums;
          for (var i = 0; i < $scope.albums.length; i++) {
            $scope.songs.push({id: $scope.albums[i]._id,
                    title: $scope.albums[i].title,
                    url: $scope.albums[i].url});
          };
  });
}]);
