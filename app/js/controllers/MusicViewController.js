angular.module('myApp')
  .controller('MusicViewController', ['$scope','$stateParams', 'Music',
    function($scope, $stateParams, Music) {
      $scope.viewMixMusic = Music.get({ action: $stateParams.id });
  }]);
