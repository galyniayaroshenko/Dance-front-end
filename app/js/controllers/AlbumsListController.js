angular.module('myApp')
.controller('AlbumsListController', ['$scope', '$state', '$window', 'Albums', 'Genre', function($scope, $state, $window, Albums, Genre) {
  $scope.albumsList = Albums.get1();
  $scope.genreListSelects = Genre.get();
  console.log($scope.genreListSelects);


}]);
