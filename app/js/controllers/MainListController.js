angular.module('myApp')
.controller('MainListController',
['$scope', '$state', '$window', 'AboutUs', 'HeadPortfolio', 'PeopleEffort', 'Contact', '$stateParams', 'Category','$timeout','$http',
function($scope, $state, $window, AboutUs, HeadPortfolio, PeopleEffort, Contact, $stateParams, Category, $timeout, $http) {
  //$scope.musicList = Music.get();
  Category.get(function(data) {
    $scope.category = data.results;
    $scope.cat = [];
    for (var i = $scope.category.length - 1; i > ($scope.category.length - ( $scope.category.length - 11)); i--) {
      $scope.cat.push($scope.category[i]);
    }
  });
  AboutUs.get(function(data){
    $scope.aboutUsList = data.results;
    for (var i = 0; i < $scope.aboutUsList.length; i++) {
      $scope.aboutUsList[i].description1 = $scope.aboutUsList[i].description1.substring(0,400);
    }
  });


  // $scope.setPortfolio = function (countryId) {
  //   $scope.portfolioUsList = {};
  //   console.log("countryId",countryId);
  //   $http({
  //       method: 'GET',
  //       url: 'https://api.parse.com/1/classes/Portholio',
  //       params: {
  //           where: {category:{__type:"Pointer",className:"category",objectId:countryId}}
  //       }
  //     }).then(function(result) {
  //       $scope.sortPortfolio = result.data.results;
  //       console.log("Portfolio is sort",$scope.sortPortfolio);
  //       $scope.portfolioUsList = [];
  //       for (var i = $scope.sortPortfolio.length - 1; i > ($scope.sortPortfolio.length - ( $scope.sortPortfolio.length - 3)); i--) {
  //         console.log('sadasdasd', i);
  //         console.log("Put",$scope.sortPortfolio[i]);
  //         $scope.portfolioUsList.push($scope.sortPortfolio[i]);
  //
  //
  //
  //       }
  //   });
  //
  // }



  // Portfolio.get(function(data){
  //   $scope.portfolioUsList = data.results;
  //   // $scope.categor = data.results;
  //   // console.log('catessss', $scope.category);
  //   // //console.log('c', $scope.category.length);
  //   // $scope.portfolioUsList = [];
  //   // for (var i = $scope.categor.length - 1; i > ($scope.categor.length - ( $scope.categor.length - 1)); i--) {
  //   //   console.log('sadasdasd', i);
  //   //   console.log("Put",$scope.categor[i]);
  //   //   $scope.portfolioUsList.push($scope.categor[i]);
  //   //
  //   // }
  //   console.log('porttttt', $scope.portfolioUsList);
  //   if ($scope.portfolioUsList) {
  //     $timeout(function() {
  //       console.log('Portholio', $scope.portfolioUsList);
  //       $(document).ready(function() {
  //         $('.asd').addClass("filter");
  //         $("#portfolio_grid").mixItUp();
  //
  //         $(".s_portfolio li").click(function() {
  //           $(".s_portfolio li").removeClass("active");
  //           $(this).addClass("active");
  //         });
  //         $(".portfolio_item").each(function(i) {
  //           $(this).find("a").attr("href", "#work_" + i);
  //           $(this).find(".podrt_descr").attr("id", "work_" + i);
  //         });
  //       });
  //     }, 5000);
  //   }
  //
  // });
  HeadPortfolio.get(function(data){
    $scope.portfolioUsList = data.results;
    console.log('porttttt', $scope.portfolioUsList);
    if ($scope.portfolioUsList) {
      $timeout(function() {
        console.log('Portholio', $scope.portfolioUsList);
        $(document).ready(function() {
          $('.asd').addClass("filter");
          $("#portfolio_grid").mixItUp();

          $(".s_portfolio li").click(function() {
            $(".s_portfolio li").removeClass("active");
            $(this).addClass("active");
          });
          $(".portfolio_item").each(function(i) {
            $(this).find("a").attr("href", "#work_" + i);
            $(this).find(".podrt_descr").attr("id", "work_" + i);
          });
        });
      }, 5000);
    }

  });


  PeopleEffort.get(function(data){
    $scope.peopleEffortList = data.results;
    //console.log('PeopleEffort', $scope.peopleEffortList);
    $(document).ready(function() {
      $("#owl-demo").owlCarousel({
        items : 1,
        nav : true,
        jsonSuccess : customDataSuccess($scope.peopleEffortList),
        navText : "",
        loop : true,
        autoplay : true,
        autoplayHoverPause : true,
        fluidSpeed : 600,
        autoplaySpeed : 600,
        navSpeed : 600,
        dotsSpeed : 600,
        dragEndSpeed : 600
      });
      function customDataSuccess(data){
        //  console.log('data', data);
        var content = "";
        for(var i in data){

          var foto = data[i].foto.url;
          var name = data[i].name;
          //  console.log('f', foto);
          //console.log('m', name);
          var profession = data[i].profession;
          var description = data[i].description;

          content += "<div><div class='img-wrap'><img src= "+foto+"></div><h3>"+name+"</h3><div class='slide-descr'>"+profession+"</div><p>"+description+"</p></div>"
          //console.log('c', content);
          //console.log('i', i);
        }
        $("#owl-demo").html(content);
      };
    })
  });
  Contact.get(function(data){
    $scope.contactList = data.results;
    //console.log('Contact', $scope.contactList);

  });

  console.log("smile");
  var test = {
      apikey: "021824db9bd13392e87cf7d8ebbe5853-us12",
      id: '09420f094d',
      email: { email: "hazard009@mail.ru" },
      merge_vars: {
        EMAIL: "hazard009@mail.ru",
        FNAME: "hazard009@mail.ru",
        LNAME: "hazard009@mail.ru"
      },
      double_optin: false
  };
  $http({
    method: 'GET',
    user: '021824db9bd13392e87cf7d8ebbe5853-us12',
    url: 'https://us12.api.mailchimp.com/3.0/'
  }).then(function successCallback(response) {
    console.log(response);
  });
}]);
