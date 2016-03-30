angular.module('myApp')
.controller('newsListController', ['$scope','$rootScope', '$state', '$window', 'news',
  function($scope, $rootScope, $state, $window, news) {
  $scope.newsList = news.get(function(data){
    $scope.newsList = data.results;
    for (var i = 0; i < $scope.newsList.length; i++) {
      $scope.newsList[i].description1 = $scope.newsList[i].description1.substring(3,150);
    }
    for (var i = 0; i < $scope.newsList.length; i++) {
      $scope.newsList[i].description_en = $scope.newsList[i].description_en.substring(3,150);
    }
    $rootScope.$watch('arg', function() {
      for (var i = 0; i < $scope.newsList.length; i++) {
        if ($rootScope.arg === "English"){
          $scope.newsList[i].languageName = $scope.newsList[i].name_en;
          $scope.newsList[i].description = $scope.newsList[i].description_en;

        } else {
          $scope.newsList[i].languageName = $scope.newsList[i].name;
          $scope.newsList[i].description = $scope.newsList[i].description1;

        }
      }
    });
    });
}]);
