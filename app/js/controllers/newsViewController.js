angular.module('myApp')
  .controller('newsViewController', ['$scope','$stateParams', 'news', function($scope, $stateParams, news) {
    console.log($stateParams.id);
    $scope.news = news.get({ action: $stateParams.id });
    console.log('ew', $scope.news);
    console.log('smile');
  }]);
