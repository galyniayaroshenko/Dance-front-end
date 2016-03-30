angular.module('myApp')
.controller('MusicListController', ['$scope', '$state', '$window', 'Music',
  function($scope, $state, $window, Music) {
  $scope.mixList = Music.get(function(data){
    $scope.mixList = data.results;
    });
}]);
