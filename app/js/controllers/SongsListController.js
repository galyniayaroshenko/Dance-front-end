angular.module('myApp')
.controller('SongsListController', ['$scope', '$state', '$window', 'Music', function($scope, $state, $window, Music) {
  //$scope.musicList = Music.get();
  $scope.musicList = Music.get(function(data){
    $scope.musicList = data.results;
    console.log('list', $scope.musicList);
    });
  console.log($scope.musicList);
console.log("smile");
}]);
