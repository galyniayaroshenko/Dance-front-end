angular.module('myApp')
.controller('MusicListController', ['$scope', '$state', '$window', 'Music', function($scope, $state, $window, Music) {
  //$scope.musicList = Music.get();
  $scope.musicList = Music.get(function(data){
    $scope.musicList = data.results;
    console.log($scope.musicList);
    });
  console.log($scope.musicList);
console.log("smile");
}]);
