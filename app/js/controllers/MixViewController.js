angular.module('myApp')
  .controller('MixViewController', ['$scope','$stateParams', 'Genre', function($scope, $stateParams, Genre) {
    $scope.mixMusices = Genre.get();
    console.log($scope.mixMusices);

    // $scope.mixClasses= [
    //   small : small,
    //   large : large,
    //   medium : medium
    // ];
    // $scope.viewMusic = function (arg) {
    //   $scope.arg = arg;
    //   console.log($scope.arg);
    //   $scope.music = Music.get1({ id: $stateParams.id });
    // }
  }]);
