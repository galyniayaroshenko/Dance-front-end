angular.module('myApp')
.controller('PortfolioListController', ['Year', 'Category', '$scope', '$state', '$window', 'Portfolio',
  function(Year, Category, $scope, $state, $window, Portfolio) {

    Category.get(function(data) {
      $scope.category = data.results;
      console.log('cat', $scope.category);
    })

    Year.get1(function(data) {
      $scope.year = data.results;
      console.log('year', $scope.year);
    })

  $scope.portfolioList = Portfolio.get(function(data){
    $scope.portfolioList = data.results;
    console.log('port', $scope.portfolioList);
    });
console.log("smile");
}]);
