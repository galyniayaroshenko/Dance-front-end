angular.module('myApp')
.controller('PortfolioListController', ['Year', 'Category', '$scope', '$state', '$window', 'Portfolio', '$http',
  function(Year, Category, $scope, $state, $window, Portfolio, $http) {

    Category.get(function(data) {
      $scope.category = data.results;
      console.log('cat', $scope.category);
    })

    Year.get1(function(data) {
      $scope.year = data.results;
      console.log('year', $scope.year);
    })

  Portfolio.get(function(data){
    $scope.portfolioList = data.results;
    console.log('port', $scope.portfolioList);
    });


    $scope.setCategory = function(objectId) {
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
         var data;
         $scope.cat = result.data.results;
         console.log("rrr", $scope.cat);
          angular.forEach(result.data.results, function(item, index){
             items1[index] = item;
             console.log("id", items1[index].category.objectId);

             $http(CatReturn(items1[index].category.objectId)).success(function(resp) {
               $scope.items2 = [];
               angular.extend(data, resp);
              //  $scope.items2[0] = resp;
              console.log(resp);
               //$scope.catt = resp;
               //console.log("mmm", $scope.catt);
                $scope.items2.push(resp);
               console.log('item2',  $scope.item2);

              //  angular.forEach(result.data.results, function(item, index){
              //    items2[index] = item;
              //  });

             });
          });

        // $scope.catPorfolio = result.data.results;
        // console.log($scope.catPorfolio);
      });

      // Portfolio.get(function(data){
      //   $scope.portfolioList = data.results;
      //   console.log('Galyuya Galyuya', $scope.portfolioList);
      //   });
        // var items1 = $scope.items1 = [];
        // var items2 = $scope.items2 = [];
        // $http.get({
        //     method: 'GET',
        //     url: 'https://api.parse.com/1/classes/Portholio',
        //     params: {
        //         where: {category:{__type:"Pointer",className:"category",objectId:"PaL9QAoB3V"}}
        //     }
        //   }).then(function(result) {
        //   $scope.catPorfolio = result.data.results;
        //   console.log($scope.catPorfolio);
            // angular.forEach(result.data.results, function(item, index){
            //     items1[index] = item;
            //     items1[index].prodano = 0;
            //     items1[index].catalog = 0;
            //     items1[index].vsi = 0;
            //
            //     $http(ArtistReturn(items1[index].objectId)).success(function(resp) {
            //       angular.forEach(resp.results, function(item, index2){
            //         items2[index2] = item;
            //
            //         if(items1[index].objectId == items2[index2].Artist.objectId)
            //         {
            //           items1[index].vsi = items1[index].vsi + 1;
            //           if (items2[index2].artworkState == '1') {
            //             items1[index].prodano = items1[index].prodano + 1;
            //           } else if(items2[index2].artworkState == '0') {
            //             items1[index].catalog = items1[index].catalog + 1;
            //           }
            //         }
            //       });
            //     });
            // });
        // });
        // function setCat(objectId) {
        //   return {
        //       method: 'GET',
        //       url: 'https://api.parse.com/1/classes/Portholio',
        //       params: {
        //           where: {category:{__type:"Pointer",className:"category",objectId:objectId}},
        //       }
        //   }
        // }
    }


}]);
