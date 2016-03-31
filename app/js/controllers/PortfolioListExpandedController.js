
angular.module('myApp')
.controller('PortfolioListExpandedController', ['Year', 'Category', '$stateParams', '$scope', '$state', '$window', 'Portfolio', '$http', '$rootScope',
  function(Year, Category, $stateParams, $scope, $state, $window, Portfolio, $http, $rootScope) {


    console.log('$stateParams', $stateParams.id);
    console.log('------------------------------',$stateParams.anotherParam);
    console.log('$state', $stateParams);
    //console.log('$state', $stateParams.year.objectId);

    $scope.asd =  function (yearId, countryId) {
      $scope.load = "loading";
         $http({
             method: 'GET',
             url: 'https://api.parse.com/1/classes/Portholio',
             params: {
                 where: {year:{__type:"Pointer",className:"year", objectId:yearId}, category:{__type:"Pointer",className:"category",objectId:countryId}}
             }
           }).then(function(result) {
             $scope.load = '';
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
               console.log('sortPortfolio!!!!asd', $scope.sortPortfolio);
                    $scope.images = [];
                            //$scope.music = data.music;
                            console.log('$scope.sortPortfolio.length', $scope.sortPortfolio.length);
                            console.log('$scope.sortPortfolio[0].objectId', $scope.sortPortfolio[0].objectId);
                            console.log('$scope.sortPortfolio[0].img.url', $scope.sortPortfolio[0].img.url);

                            for (var i = 0; i < $scope.sortPortfolio.length; i++) {
                              $scope.images.push({objectId: $scope.sortPortfolio[i].objectId,
                                      description: $scope.sortPortfolio[i].city_en,
                                      thumb: $scope.sortPortfolio[i].img.url,
                                      img: $scope.sortPortfolio[i].img.url});
                            };
console.log('images.url', $scope.images[0].thumb);
                console.log('$scope.images', $scope.images);
             });





         });
       }






    console.log('S');
    console.log('function (yearId, countryId)', $scope.asd($stateParams.anotherParam, $stateParams.id));

}]);
