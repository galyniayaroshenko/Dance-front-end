angular.module('myApp')
  .controller('MainLanguage', ['$scope','$state', '$rootScope', '$window', 'Language', '$http',
    function ($scope, $state, $rootScope, $window, Language, $http) {
      $rootScope.arg = "Ukraine";
      $http({
          method: 'GET',
          url: 'https://api.parse.com/1/classes/language',
          params: {
              where: {name:$rootScope.arg}
          }
        }).then(function(result) {
          $scope.list = result.data.results;
          console.log("start language",$scope.list);
      });


      $scope.getLanguage = function (arg) {
        $rootScope.arg = arg;
        console.log('arg', arg);
        console.log("asd");

        $http({
            method: 'GET',
            url: 'https://api.parse.com/1/classes/language',
            params: {
                where: {name:arg}
            }
          }).then(function(result) {
            $scope.list = result.data.results;
            console.log("list is sort",$scope.list);
        });

      };



  }]);
