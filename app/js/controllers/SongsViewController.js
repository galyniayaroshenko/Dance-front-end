angular.module('myApp')
  .controller('SongsViewController', ['$scope','$stateParams', 'Music', function($scope, $stateParams, Music) {
    console.log($stateParams.id);
    $scope.viewMusic = Music.get({ action: $stateParams.id });
    console.log('soV', $scope.viewMusic);
    //console.log('smile');

  }]);
