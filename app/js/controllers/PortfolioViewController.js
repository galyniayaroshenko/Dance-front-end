angular.module('myApp')
  .controller('PortfolioViewController', ['$scope','$stateParams', 'Year', 'Category', 'Portfolio', '$http', '$rootScope',
    function($scope, $stateParams, Year, Category, Portfolio, $http, $rootScope) {
     Portfolio.get({ action: $stateParams.id }, function (data) {
      $scope.portfolio = data;
      $rootScope.$watch('arg', function() {
          if ($rootScope.arg === "English"){
            $scope.portfolio.languageDate = $scope.portfolio.date_en;
            $scope.portfolio.languageTitle = $scope.portfolio.title_en;
            $scope.portfolio.descriptionLan = $scope.portfolio.description_en;
            $scope.portfolio.countryLan = $scope.portfolio.contry_en;
            $scope.portfolio.cityLan = $scope.portfolio.city_en;
          } else {
            $scope.portfolio.languageDate = $scope.portfolio.date;
            $scope.portfolio.languageTitle = $scope.portfolio.title;
            $scope.portfolio.descriptionLan = $scope.portfolio.description;
            $scope.portfolio.countryLan = $scope.portfolio.country;
            $scope.portfolio.cityLan = $scope.portfolio.city;
          }
      });
    });

      function portfolioReturn(objectId) {
        return {
            method: 'GET',
            url: 'https://api.parse.com/1/classes/category/' + objectId
        }
      }
      function yearReturn(objectId) {
        return {
            method: 'GET',
            url: 'https://api.parse.com/1/classes/year/' + objectId
        }
      }
        $http.get('https://api.parse.com/1/classes/Portholio/' + $stateParams.id).then(function(result) {
       $scope.portho = result;

        $http(portfolioReturn($scope.portho.data.category.objectId)).success(function(resp) {
          $scope.catcat = resp;
          $rootScope.$watch('arg', function() {
              if ($rootScope.arg === "English"){
                $scope.catcat.languageName = $scope.catcat.name_en;

              } else {
                $scope.catcat.languageName = $scope.catcat.name;

              }
          });
        });
        $http(yearReturn($scope.portho.data.year.objectId)).success(function(res) {
          $scope.yearyear = res;
        });
     });
  }]);
