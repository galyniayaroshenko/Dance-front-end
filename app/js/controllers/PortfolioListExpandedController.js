// angular.module('myApp')
// .controller('PortfolioListExpandedController', ['Year', 'Category', '$stateParams', '$scope', '$state', '$window', 'Portfolio', '$http', '$rootScope',
//   function(Year, Category, $stateParams, $scope, $state, $window, Portfolio, $http, $rootScope) {
//
//
//   //  var self = this;
//
// // $scope.images = [];
// //     $scope.images = [
// //         {thumb: 'http://www.segodnya.ua/img/article/6842/13_main.jpg', img: 'http://www.segodnya.ua/img/article/6842/13_main.jpg', description: 'Image 1'},
// //         {thumb: 'http://img.vz.ru/upimg/p_7/p_754207.jpg', img: 'http://img.vz.ru/upimg/p_7/p_754207.jpg', description: 'Image 2'},
// //         {thumb: 'http://www.segodnya.ua/img/article/6842/13_main.jpg', img: 'http://www.segodnya.ua/img/article/6842/13_main.jpg', description: 'Image 3'},
// //         {thumb: 'http://img.vz.ru/upimg/p_7/p_754207.jpg', img: 'http://img.vz.ru/upimg/p_7/p_754207.jpg', description: 'Image 4'}
// //     ];
// //     console.log('$scope.images', $scope.images);
//     //console.log('dsfs');
//
//
//
//
// console.log('$stateParams', $stateParams.id);
// console.log('------------------------------',$stateParams.anotherParam);
// // console.log('$state', $stateParams.year.objectId);
//     $scope.asd =  function (yearId, countryId) {
//         $http({
//             method: 'GET',
//             url: 'https://api.parse.com/1/classes/Portholio',
//             params: {
//                   where: {year:{__type:"Pointer",className:"year", objectId:yearId}, category:{__type:"Pointer",className:"category",objectId:countryId}}
//             }
//           }).then(function(result) {
//             $scope.sortPortfolio = result.data.results;
//             $rootScope.$watch('arg', function() {
//               for (var i = 0; i < $scope.sortPortfolio.length; i++) {
//                 if ($rootScope.arg === "English"){
//                   $scope.sortPortfolio[i].languageCountry = $scope.sortPortfolio[i].country_en;
//                   $scope.sortPortfolio[i].languageCity = $scope.sortPortfolio[i].city_en;
//                 } else {
//                   $scope.sortPortfolio[i].languageCountry = $scope.sortPortfolio[i].country;
//                   $scope.sortPortfolio[i].languageCity = $scope.sortPortfolio[i].city;
//                 }
//               }
//               console.log('sortPortfolio!!!!', $scope.sortPortfolio);
//             //   $rootScope.$watch('sortPortfolio', function() {
//             //     $timeout(function() {
//             //       $(document).ready(function() {
//             //         var $gallery = $('.gallery a').simpleLightbox();
//             //
//             //         $gallery.on('show.simplelightbox', function(){
//             //           console.log('Requested for showing');
//             //         })
//             //         .on('shown.simplelightbox', function(){
//             //           console.log('Shown');
//             //         })
//             //         .on('close.simplelightbox', function(){
//             //           console.log('Requested for closing');
//             //         })
//             //         .on('closed.simplelightbox', function(){
//             //           console.log('Closed');
//             //         })
//             //         .on('change.simplelightbox', function(){
//             //           console.log('Requested for change');
//             //         })
//             //         .on('next.simplelightbox', function(){
//             //           console.log('Requested for next');
//             //         })
//             //         .on('prev.simplelightbox', function(){
//             //           console.log('Requested for prev');
//             //         })
//             //         .on('nextImageLoaded.simplelightbox', function(){
//             //           console.log('Next image loaded');
//             //         })
//             //         .on('prevImageLoaded.simplelightbox', function(){
//             //           console.log('Prev image loaded');
//             //         })
//             //         .on('changed.simplelightbox', function(){
//             //           console.log('Image changed');
//             //         })
//             //         .on('nextDone.simplelightbox', function(){
//             //           console.log('Image changed to next');
//             //         })
//             //         .on('prevDone.simplelightbox', function(){
//             //           console.log('Image changed to prev');
//             //         })
//             //         .on('error.simplelightbox', function(e){
//             //           console.log('No image found, go to the next/prev');
//             //           console.log(e);
//             //         });
//             //       }
//             //
//             //   }
//             // });
//         });
//       }
//
//
//
//     console.log('S');
//       console.log('function (yearId, countryId)', $scope.asd($stateParams.anotherParam, $stateParams.id));
// }
// }]);
angular.module('myApp')
.controller('PortfolioListExpandedController', ['Year', 'Category', '$stateParams', '$scope', '$state', '$window', 'Portfolio', '$http', '$rootScope',
  function(Year, Category, $stateParams, $scope, $state, $window, Portfolio, $http, $rootScope) {

    // $scope.images = [];
    //     $scope.images = [
    //         {thumb: 'http://www.segodnya.ua/img/article/6842/13_main.jpg', img: 'http://www.segodnya.ua/img/article/6842/13_main.jpg', description: 'Image 1'},
    //         {thumb: 'http://img.vz.ru/upimg/p_7/p_754207.jpg', img: 'http://img.vz.ru/upimg/p_7/p_754207.jpg', description: 'Image 2'},
    //         {thumb: 'http://www.segodnya.ua/img/article/6842/13_main.jpg', img: 'http://www.segodnya.ua/img/article/6842/13_main.jpg', description: 'Image 3'},
    //         {thumb: 'http://img.vz.ru/upimg/p_7/p_754207.jpg', img: 'http://img.vz.ru/upimg/p_7/p_754207.jpg', description: 'Image 4'}
    //     ];
    //     console.log('$scope.images', $scope.images);

    console.log('$stateParams', $stateParams.id);
    console.log('------------------------------',$stateParams.anotherParam);
    console.log('$state', $stateParams);
    //console.log('$state', $stateParams.year.objectId);

    $scope.asd =  function (yearId, countryId) {
         $http({
             method: 'GET',
             url: 'https://api.parse.com/1/classes/Portholio',
             params: {
                 where: {year:{__type:"Pointer",className:"year", objectId:yearId}, category:{__type:"Pointer",className:"category",objectId:countryId}}
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
