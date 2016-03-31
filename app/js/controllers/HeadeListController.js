angular.module('myApp')
.controller('HeadeListController',
['$scope', '$state', '$window','$rootScope',  '$stateParams', '$timeout','$http', '$timeout',
  function($scope, $state, $window,  $rootScope,  $stateParams, $timeout, $http, $timeout) {

    $scope.LoadPortfolio = function () {
      console.log('loglog');
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
    };

}]);
