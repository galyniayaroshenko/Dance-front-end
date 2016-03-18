angular.module('myApp')
.controller('PerformerListController', ['$scope', '$state', '$window', 'Performer',
  function($scope, $state, $window, Performer) {
    $scope.performerList = Performer.get();
}]);
