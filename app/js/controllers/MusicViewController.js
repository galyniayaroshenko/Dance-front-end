angular.module('myApp')
  .controller('MusicViewController', ['$scope','$stateParams', 'Music', function($scope, $stateParams, Music) {
    console.log($stateParams.id);
    $scope.viewMixMusic = Music.get({ action: $stateParams.id });
    console.log('mixV', $scope.viewMixMusic);
    //console.log('smile');

  }]);
