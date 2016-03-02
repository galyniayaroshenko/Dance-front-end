

angular.module('myApp')
.controller('PortfolioListController', ['Year', 'Category', '$stateParams', '$scope', '$state', '$window', 'Portfolio', '$http',
  function(Year, Category, $stateParams, $scope, $state, $window, Portfolio, $http) {

    Category.get(function(data) {
      $scope.category = data.results;
      console.log('cat', $scope.category);
    })

    Year.get1(function(data) {
      $scope.year = data.results;
      console.log('year', $scope.year);
    })

  Portfolio.get(function(data){
    $scope.sortPortfolio = data.results;
    console.log('port', $scope.sortPortfolio);
    });

    $scope.setPortfolio = function (yearId, countryId) {
      console.log("yearId",yearId);
      console.log("countryId",countryId);
      $http({
          method: 'GET',
          url: 'https://api.parse.com/1/classes/Portholio',
          params: {
              where: {year:{__type:"Pointer",className:"year",objectId:yearId}, category:{__type:"Pointer",className:"category",objectId:countryId}}
          }
        }).then(function(result) {
          $scope.sortPortfolio = result.data.results;
          console.log("Portfolio is sort",$scope.sortPortfolio);

      });
    }
    function Unique(A) {
         var n = A.length, k = 0, B = [];
         for (var i = 0; i < n; i++)
          { var j = 0;
            while (j < k && B[j] !== A[i]) j++;
            if (j == k) B[k++] = A[i];
          }
         return B;
     }
    $scope.setCategory = function(objectId) {
      var items2 = $scope.items2 = []
      console.log("Galyunya",objectId);
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
          //console.log(result);

         var items1 = $scope.items1 = [];
        //  var items2 = $scope.items2 = []
         $scope.cat = result.data.results;
         console.log("rrr", $scope.cat);
          angular.forEach(result.data.results, function(item, index){
             items1[index] = item;
             console.log("id", items1[index].category.objectId);

             $http(CatReturn(items1[index].category.objectId)).success(function(resp) {
               console.log("index", index);
               items2[index] = resp;
               console.log('le', items2.length);
               Unique(items2);


               //console.log('z', items2[index].objectId);
              //  for(var s = 1; s <= index; s++){
              //    if (items2.length){
              //       var category = items2[0];
              //       if (category === items2[s]) {
              //          items2[s+1] = '';
              //        console.log('true');
              //       } else {
              //         items2[s] = items2[s];
              //         items2[s+1] = items2[s+1];
              //         console.log('false');
              //       }
              //    } else {
               //
              //    }
               //
               //
               //
              //  }

               console.log(resp);
               console.log('item2',  items2);
             });
             console.log(items2.length);
             console.log('Галюня кіцюня',items2);
          });
      });
    }


}]);
