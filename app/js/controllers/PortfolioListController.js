angular.module('myApp')
.controller('PortfolioListController', ['Year', 'Category', '$stateParams', '$scope', '$state', '$window', 'Portfolio', '$http', '$rootScope',
  function(Year, Category, $stateParams, $scope, $state, $window, Portfolio, $http, $rootScope) {

    Category.get(function(data) {
      $scope.category = data.results;
    })

    // Year.get1(function(data) {
    //   $scope.year = data.results;
    //   console.log('year', $scope.year);
    // })

  Portfolio.get(function(data){
    $scope.sortPortfolio = data.results;
    $rootScope.$watch('arg', function() {
      for (var i = 0; i < $scope.sortPortfolio.length; i++) {
        if ($rootScope.arg === "English"){
          $scope.sortPortfolio[i].languageCountry = $scope.sortPortfolio[i].country_en;
          $scope.sortPortfolio[i].languageCity = $scope.sortPortfolio[i].city_en;
          $scope.sortPortfolio[i].yearOut = $http(yearReturn($scope.sortPortfolio[i].year.objectId)).success(function(resp) {
            
            $scope.y = resp;
          console.log('r', resp.year);
         console.log('$s', $scope.y.year);
          });
        } else {
          $scope.sortPortfolio[i].languageCountry = $scope.sortPortfolio[i].country;
          $scope.sortPortfolio[i].languageCity = $scope.sortPortfolio[i].city;
          $scope.sortPortfolio[i].yearOut =$http(yearReturn($scope.sortPortfolio[i].year.objectId)).success(function(resp) {

            $scope.y = resp;
          console.log('r', resp.year);
         console.log('$s', $scope.y.year);
          });

        }
      }
      console.log('port', $scope.sortPortfolio);
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


      $scope.portfolioName = unique($scope.sortPortfolio);
      console.log('!!!!!', $scope.portfolioName);
      console.log('id', $scope.portfolioName[0].year.objectId);



      function yearReturn(objectId) {
          return {
              method: 'GET',
              url: 'https://api.parse.com/1/classes/year/' + objectId
          }
        }


      for (var i = 0; i < $scope.portfolioName.length; i++) {
        console.log($scope.portfolioName[i].year.objectId);
        //console.log('year', yearReturn($scope.portfolioName[i].year.objectId));
        $http(yearReturn($scope.portfolioName[i].year.objectId)).success(function(resp) {
           //var year = [];
          $scope.y = resp;
        //  year.push(y);
      //  console.log('resp', year.year);
        console.log('respyear', resp.year);
       console.log('$scope.year', $scope.y.year);
        });

      }

    });
    });


    // function setPortfolio(yearId, countryId) {
    //   $http({
    //       method: 'GET',
    //       url: 'https://api.parse.com/1/classes/Portholio',
    //       params: {
    //           where: {year:{__type:"Pointer",className:"year",objectId:yearId}, category:{__type:"Pointer",className:"category",objectId:countryId}}
    //       }
    //     }).then(function(result) {
    //       $scope.sortPortfolio = result.data.results;
    //       console.log('zxc', $scope.sortPortfolio);
    //       $rootScope.$watch('arg', function() {
    //         for (var i = 0; i < $scope.sortPortfolio.length; i++) {
    //           if ($rootScope.arg === "English"){
    //             $scope.sortPortfolio[i].languageCountry = $scope.sortPortfolio[i].country_en;
    //             $scope.sortPortfolio[i].languageCity = $scope.sortPortfolio[i].city_en;
    //           } else {
    //             $scope.sortPortfolio[i].languageCountry = $scope.sortPortfolio[i].country;
    //             $scope.sortPortfolio[i].languageCity = $scope.sortPortfolio[i].city;
    //           }
    //         }
    //         console.log('----', $scope.sortPortfolio);
    //       });
    //   });
    // }
    // //setPortfolio('PaL9QAoB3V','zxbIAuSWTE');
    // setPortfolio('iyVSnOoROX','U4FnDPd1O9');



    // $scope.setPortfolio = function (yearId, countryId) {
    //   $http({
    //       method: 'GET',
    //       url: 'https://api.parse.com/1/classes/Portholio',
    //       params: {
    //           where: {year:{__type:"Pointer",className:"year",objectId:yearId}, category:{__type:"Pointer",className:"category",objectId:countryId}}
    //       }
    //     }).then(function(result) {
    //       $scope.sortPortfolio = result.data.results;
    //       $rootScope.$watch('arg', function() {
    //         for (var i = 0; i < $scope.sortPortfolio.length; i++) {
    //           if ($rootScope.arg === "English"){
    //             $scope.sortPortfolio[i].languageCountry = $scope.sortPortfolio[i].country_en;
    //             $scope.sortPortfolio[i].languageCity = $scope.sortPortfolio[i].city_en;
    //           } else {
    //             $scope.sortPortfolio[i].languageCountry = $scope.sortPortfolio[i].country;
    //             $scope.sortPortfolio[i].languageCity = $scope.sortPortfolio[i].city;
    //           }
    //         }
    //       });
    //   });
    // }


    // $scope.setCategory = function(objectId) {
    //   var items2 = $scope.items2 = [];
    //   $scope.portfolioName = [];
    //   function CatReturn(objectId) {
    //     return {
    //         method: 'GET',
    //         url: 'https://api.parse.com/1/classes/category/' + objectId
    //     }
    //   }
    //   $http({
    //       method: 'GET',
    //       url: 'https://api.parse.com/1/classes/Portholio',
    //       params: {
    //           where: {year:{__type:"Pointer",className:"year",objectId:objectId}}
    //       }
    //     }).then(function(result) {
    //
    //      var items1 = $scope.items1 = [];
    //      $scope.cat = result.data.results;
    //       angular.forEach(result.data.results, function(item, index){
    //          items1[index] = item;
    //          $http(CatReturn(items1[index].category.objectId)).success(function(resp) {
    //            items2[index] = resp;
    //
    //            var books = [];
    //                      items2.forEach(function(bookData, i, item) {
    //                           var book = bookData;
    //                           books.push(book);
    //                      });
    //                      function unique(arr) {
    //                       var result = [];
    //
    //                       nextInput:
    //                         for (var i = 0; i < arr.length; i++) {
    //                           var myarray = arr[i];
    //                           var str = arr[i].objectId;
    //                           for (var j = 0; j < result.length; j++) {
    //                             if (result[j].objectId == str) continue nextInput;
    //                           }
    //                           result.push(myarray);
    //                         }
    //                       return result;
    //                     }
    //
    //                     $scope.portfolioName = unique(books);
    //
    //                     $rootScope.$watch('arg', function() {
    //                       for (var i = 0; i < $scope.portfolioName.length; i++) {
    //                         if ($rootScope.arg === "English"){
    //                           $scope.portfolioName[i].nameLan = $scope.portfolioName[i].name_en;
    //
    //                         } else {
    //                           $scope.portfolioName[i].nameLan = $scope.portfolioName[i].name;
    //                         }
    //                       }
    //                       //console.log('$scope.portfolioName', $scope.portfolioName);
    //                     });
    //          });
    //       });
    //   });
    // }
}]);
