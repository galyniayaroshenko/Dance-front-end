angular.module('myApp')
  .controller('PortfolioViewController', ['$scope','$stateParams', 'Year', 'Category', 'Portfolio', '$http', '$rootScope',
    function($scope, $stateParams, Year, Category, Portfolio, $http, $rootScope) {
    console.log($stateParams.id);
     Portfolio.get({ action: $stateParams.id }, function (data) {
      $scope.portfolio = data;
      console.log('portфів', $scope.portfolio);
    });
    console.log('asd');

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
       console.log('ppp', $scope.portho);
       console.log('ididid', $scope.portho.data.category.objectId);
       console.log('idyear', $scope.portho.data.year.objectId);

        $http(portfolioReturn($scope.portho.data.category.objectId)).success(function(resp) {
          $scope.catcat = resp;
          console.log('catcat', $scope.catcat);
        });
        $http(yearReturn($scope.portho.data.year.objectId)).success(function(res) {
          $scope.yearyear = res;
          console.log('yearssss', $scope.yearyear);
        });
     });
  }]);
