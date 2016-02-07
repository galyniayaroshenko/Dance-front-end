angular.module('myApp')
.controller('PortfolioListController', ['$scope', '$state', '$window', 'Portfolio', function($scope, $state, $window, Portfolio) {
  //$scope.musicList = Music.get();
  $scope.portfolioList = Portfolio.get(function(data){
    $scope.portfolioList = data.results;
    console.log($scope.portfolioList);
    });
console.log("smile");
}]);
