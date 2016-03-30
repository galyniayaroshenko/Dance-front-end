angular.module('myApp')
.controller('GenreListController', ['$scope', '$state', '$window', 'Genre',
  function($scope, $state, $window, Genre) {
    $scope.genreList = Genre.get();
}]);
