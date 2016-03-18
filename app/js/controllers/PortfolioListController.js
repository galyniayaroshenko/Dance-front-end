angular.module('myApp')
.controller('PortfolioListController', ['Year', 'Category', '$stateParams', '$scope', '$state', '$window', 'Portfolio', '$http', '$rootScope',
  function(Year, Category, $stateParams, $scope, $state, $window, Portfolio, $http, $rootScope) {

    Category.get(function(data) {
      $scope.category = data.results;
    })

    Year.get1(function(data) {
      $scope.year = data.results;
    })

  Portfolio.get(function(data){
    $scope.sortPortfolio = data.results;
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
    });
    });

    $scope.setPortfolio = function (yearId, countryId) {
      $http({
          method: 'GET',
          url: 'https://api.parse.com/1/classes/Portholio',
          params: {
              where: {year:{__type:"Pointer",className:"year",objectId:yearId}, category:{__type:"Pointer",className:"category",objectId:countryId}}
          }
        }).then(function(result) {
          $scope.sortPortfolio = result.data.results;
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
          });
      });
    }
    $scope.setCategory = function(objectId) {
      var items2 = $scope.items2 = [];
      function CatReturn(objectId) {
        return {
            method: 'GET',
            url: 'https://api.parse.com/1/classes/category/' + objectId
        }
      }
      $http({
          method: 'GET',
          url: 'https://api.parse.com/1/classes/Portholio',
          params: {
              where: {year:{__type:"Pointer",className:"year",objectId:objectId}}
          }
        }).then(function(result) {

         var items1 = $scope.items1 = [];
         $scope.cat = result.data.results;
          angular.forEach(result.data.results, function(item, index){
             items1[index] = item;
             $http(CatReturn(items1[index].category.objectId)).success(function(resp) {
               items2[index] = resp;

               var books = [];
                         items2.forEach(function(bookData, i, item) {
                              var book = bookData;
                              books.push(book);
                         });
                         function unique(arr) {
                          var result = [];

                          nextInput:
                            for (var i = 0; i < arr.length; i++) {
                              var myarray = arr[i];
                              var str = arr[i].objectId;
                              for (var j = 0; j < result.length; j++) {
                                if (result[j].objectId == str) continue nextInput;
                              }
                              result.push(myarray);
                            }
                          return result;
                        }

                        $scope.portfolioName = unique(books);

                        $rootScope.$watch('arg', function() {
                          for (var i = 0; i < $scope.portfolioName.length; i++) {
                            if ($rootScope.arg === "English"){
                              $scope.portfolioName[i].nameLan = $scope.portfolioName[i].name_en;

                            } else {
                              $scope.portfolioName[i].nameLan = $scope.portfolioName[i].name;
                            }
                          }
                        });
             });
          });
      });
    }
}]);
