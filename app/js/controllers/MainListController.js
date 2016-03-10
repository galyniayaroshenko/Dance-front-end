angular.module('myApp')
.controller('MainListController',
['$scope', '$state', '$window', 'AboutUs', 'HeadPortfolio', '$rootScope', 'PeopleEffort',  'Contact', '$stateParams', 'Category','$timeout','$http', '$timeout',
function($scope, $state, $window, AboutUs, HeadPortfolio, $rootScope, PeopleEffort, Contact, $stateParams, Category, $timeout, $http, $timeout) {
  //$scope.musicList = Music.get();
  Category.get(function(data) {
    $scope.category = data.results;
    console.log("category set",$scope.category);
    $rootScope.$watch('arg', function() {
      console.log('portRoot', $rootScope.arg);

      for (var i = 0; i < $scope.category.length; i++) {
        if ($rootScope.arg === "English"){
          console.log('English set');
          $scope.category[i].nameLan = $scope.category[i].name_en;
        } else {
            console.log('Ukraine set');
          $scope.category[i].nameLan = $scope.category[i].name;
          console.log();
        }
      }
      $scope.cat = [];
      for (var i = $scope.category.length - 1; i > $scope.category.length - 4; i--) {
        $scope.cat.push($scope.category[i]);
      }
      console.log("cat", $scope.cat);
    });

  });
  AboutUs.get(function(data){
    $scope.aboutUsList = data.results;
    for (var i = 0; i < $scope.aboutUsList.length; i++) {
      $scope.aboutUsList[i].description1 = $scope.aboutUsList[i].description1.substring(0,400);
    }
    for (var i = 0; i < $scope.aboutUsList.length; i++) {
      $scope.aboutUsList[i].description_en = $scope.aboutUsList[i].description_en.substring(0,400);
    }

    $rootScope.$watch('arg', function() {
      for (var i = 0; i < $scope.aboutUsList.length; i++) {
        if ($rootScope.arg === "English"){
          $scope.aboutUsList[i].languageName = $scope.aboutUsList[i].name_en;
          $scope.aboutUsList[i].languageTitle = $scope.aboutUsList[i].title_en;
          $scope.aboutUsList[i].description = $scope.aboutUsList[i].description_en;

        } else {
          $scope.aboutUsList[i].languageName = $scope.aboutUsList[i].name;
          $scope.aboutUsList[i].languageTitle = $scope.aboutUsList[i].title1;
          $scope.aboutUsList[i].description = $scope.aboutUsList[i].description1;

        }
      }
      console.log('!@#aboutUsList', $scope.aboutUsList[0].objectId);
    });


  });

  HeadPortfolio.get(function(data){
    $scope.portfolioUsList = data.results;

    $rootScope.$watch('arg', function() {
      for (var i = 0; i < $scope.portfolioUsList.length; i++) {
        if ($rootScope.arg === "English"){
          $scope.portfolioUsList[i].languageName = $scope.portfolioUsList[i].name_en;
          $scope.portfolioUsList[i].languageTitle = $scope.portfolioUsList[i].title_en;
          $scope.portfolioUsList[i].descriptionLan = $scope.portfolioUsList[i].description_en;
          $scope.portfolioUsList[i].countryLan = $scope.portfolioUsList[i].contry_en;
          $scope.portfolioUsList[i].cityLan = $scope.portfolioUsList[i].city_en;

        } else {
          $scope.portfolioUsList[i].languageName = $scope.portfolioUsList[i].name;
          $scope.portfolioUsList[i].languageTitle = $scope.portfolioUsList[i].title;
          $scope.portfolioUsList[i].descriptionLan = $scope.portfolioUsList[i].description;
          $scope.portfolioUsList[i].countryLan = $scope.portfolioUsList[i].country;
          $scope.portfolioUsList[i].cityLan = $scope.portfolioUsList[i].city;

        }
      }
    });

    if ($scope.portfolioUsList) {
      $timeout(function() {
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
    console.log('!!!!PeopleEffortssss', $scope.peopleEffortList);
    //$scope.peopleEffortL = [];

    $rootScope.$watch('arg', function() {
      console.log("rootscopesssss",$rootScope.arg);
      console.log('sss', $scope.peopleEffortList);
      for (var i = 0; i < $scope.peopleEffortList.length; i++) {

        if ($rootScope.arg === "English"){
          $scope.peopleEffortList[i].nameLan = $scope.peopleEffortList[i].name_en;
          $scope.peopleEffortList[i].professionLan = $scope.peopleEffortList[i].profession_en;
          $scope.peopleEffortList[i].descriptionLan = $scope.peopleEffortList[i].description_en;

        } else {
          $scope.peopleEffortList[i].nameLan = $scope.peopleEffortList[i].name;
          $scope.peopleEffortList[i].professionLan = $scope.peopleEffortList[i].profession;
          $scope.peopleEffortList[i].descriptionLan = $scope.peopleEffortList[i].description;

        }
      } console.log('$scope.peopleEffortL', $scope.peopleEffortList);

          $timeout(function () {
            angular.element(document).ready(function() {
              angular.element("#owl-demo").owlCarousel({
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

            })
          }, 5000);
          function customDataSuccess(data){
            var content = "";

            for(var i = 0; i < data.length; i++){
              var foto = data[i].foto.url;
              var name = data[i].nameLan;
              var profession = data[i].professionLan;
              var description = data[i].descriptionLan;

              content += "<div><div class='img-wrap'><img src= "+foto+"></div><h3>"+name+"</h3><div class='slide-descr'>"+profession+"</div><p>"+description+"</p></div>"

            }
            $("#owl-demo").html(content);
          };
    });
  });
  Contact.get(function(data){
    $scope.contactList = data.results;
    $rootScope.$watch('arg', function() {
      console.log("rootscope",$rootScope.arg);
      console.log('ssslll', $scope.contactList);
      for (var i = 0; i < $scope.contactList.length; i++) {
        if ($rootScope.arg === "English"){
          $scope.contactList[i].name = $scope.contactList[i].name_en;
          $scope.contactList[i].street = $scope.contactList[i].street_en;
          $scope.contactList[i].headAddress = $scope.contactList[i].headAddress_en;

        } else {
          $scope.contactList[i].name = $scope.contactList[i].name;
          $scope.contactList[i].street = $scope.contactList[i].street;
          $scope.contactList[i].headAddress = $scope.contactList[i].headAddress;

        }
      }
      console.log('asasas', $scope.contactList);
    });

  });
}]);
