angular.module('myApp')
.controller('MainListController',
['$scope', '$state', '$window', 'AboutUs', 'HeadPortfolio', '$rootScope', 'PeopleEffort',  'Contact', '$stateParams', 'Category','$timeout','$http', '$timeout',
  function($scope, $state, $window, AboutUs, HeadPortfolio, $rootScope, PeopleEffort, Contact, $stateParams, Category, $timeout, $http, $timeout) {
    Category.get(function(data) {
    $scope.category = data.results;
    $rootScope.$watch('arg', function() {

      for (var i = 0; i < $scope.category.length; i++) {
        if ($rootScope.arg === "English"){
          $scope.category[i].nameLan = $scope.category[i].name_en;
        } else {
          $scope.category[i].nameLan = $scope.category[i].name;
        }
      }
      $scope.cat = [];
      for (var i = $scope.category.length - 1; i > $scope.category.length - 4; i--) {
        $scope.cat.push($scope.category[i]);
      }
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
    });
  });



  $rootScope.$on('$viewContentLoaded', function() {
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

console.log("aasasasasasasas");

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
    });
  });
});
  PeopleEffort.get(function(data){
  $scope.peopleEffortList = data.results;
  $rootScope.$watch('arg', function() {
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
  }
  $timeout(function() {
  $(document).ready(function() {
  $("#owl-demo").owlCarousel({
  items : 1,
  nav : true,
  navText : "",
  // loop : true,
  autoplay : true,
  autoplayHoverPause : true,
  fluidSpeed : 600,
  autoplaySpeed : 600,
  navSpeed : 600,
  dotsSpeed : 600,
  dragEndSpeed : 600
  });
  });
  }, 0)
  });
  });

  Contact.get(function(data){
    $scope.contactList = data.results;
    $rootScope.$watch('arg', function() {
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
    });
  });
}]);
