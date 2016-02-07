angular.module('myApp')
  .controller('MusicViewController', ['$scope','$stateParams', 'Music', function($scope, $stateParams, Music) {
    console.log($stateParams.id);
    $scope.viewMusic = Music.get({ action: $stateParams.id });
    console.log($scope.viewMusic);
    //console.log('smile');

  }]);
