angular.module('myApp')
.controller('newsListController', ['$scope', '$state', '$window', 'news', function($scope, $state, $window, news) {
  //$scope.musicList = Music.get();
  $scope.newsList = news.get(function(data){
    $scope.newsList = data.results;
    console.log($scope.newsList);
    });
console.log("smile");
}]);
