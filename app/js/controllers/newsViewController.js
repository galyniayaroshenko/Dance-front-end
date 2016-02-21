angular.module('myApp')
  .controller('newsViewController', ['$scope','$stateParams', 'news', '$sce',
    function($scope, $stateParams, news , $sce) {
    console.log($stateParams.id);
      news.get({ action: $stateParams.id }, function(data) {
        $scope.news = data;
        $scope.news.description1 = $sce.trustAsHtml($scope.news.description1);
        console.log('ew', $scope.news);
        console.log('smile');
    });
  }]);
