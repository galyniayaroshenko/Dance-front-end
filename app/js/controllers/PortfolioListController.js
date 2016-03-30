angular.module('myApp')
.controller('PortfolioListController', ['Year', 'Category', '$stateParams', '$scope', '$state', '$window', 'Portfolio', '$http', '$rootScope',
function(Year, Category, $stateParams, $scope, $state, $window, Portfolio, $http, $rootScope) {

  Category.get(function(data) {
    $scope.category = data.results;
  })

  Portfolio.get(function(data){

    function yearReturn(objectId) {
      return {
        method: 'GET',
        url: 'https://api.parse.com/1/classes/year/' + objectId
      }
    }
    function unique(arr) {
      var result = [];

      nextInput:
      for (var i = 0; i < arr.length; i++) {
        var myarray = arr[i];
        var cat = arr[i].category.objectId;
        var year = arr[i].year.objectId;

        for (var j = 0; j < result.length; j++) {
          if ((result[j].category.objectId == cat) && (result[j].year.objectId == year)) continue nextInput;
        }
        result.push(myarray);
      }
      return result;
    }

    var items1 =  $scope.sortPortfolio = [];
    angular.forEach(data.results, function(item, index) {
      items1[index] = item;
      console.log(items1[index].year.objectId);
      $http(yearReturn(items1[index].year.objectId)).success(function(resp) {
        console.log("aaaaaaaa",resp);
        items1[index].yearPort = resp.year;
      });
    });
    console.log("items1",items1);


    $rootScope.$watch('arg', function() {

      for (var i = 0; i < $scope.sortPortfolio.length; i++) {
        if ($rootScope.arg === "English"){
          $scope.sortPortfolio[i].languageCountry = $scope.sortPortfolio[i].country_en;
          $scope.sortPortfolio[i].languageCity = $scope.sortPortfolio[i].city_en;
        } else {
          $scope.sortPortfolio[i].languageCountry = $scope.sortPortfolio[i].country;
          $scope.sortPortfolio[i].languageCity = $scope.sortPortfolio[i].city;
        }

      }

      $scope.portfolioName = unique(items1);
      console.log('!!!!!', $scope.portfolioName);

    });
  });


}]);
