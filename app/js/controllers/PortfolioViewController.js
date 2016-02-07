angular.module('myApp')
  .controller('PortfolioViewController', ['$scope','$stateParams', 'Portfolio', function($scope, $stateParams, Portfolio) {
    console.log($stateParams.id);
    $scope.portfolio = Portfolio.get({ action: $stateParams.id });
    console.log($scope.portfolio);
    console.log('smile');
  }]);
