angular.module('myApp')
.controller('MusicListController', ['$scope', '$state', '$window', 'Music', function($scope, $state, $window, Music) {
  //$scope.musicList = Music.get();
  $scope.mixList = Music.get(function(data){
    $scope.mixList = data.results;
    console.log('listL', $scope.mixList);
    console.log('list', $scope.mixList.objectId);
    });
  console.log($scope.mixList);
console.log("smile");
}]);
