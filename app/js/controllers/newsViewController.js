angular.module('myApp')
  .controller('newsViewController', ['$scope','$stateParams', '$rootScope', 'news', '$sce',
    function($scope, $stateParams, $rootScope, news , $sce) {
      $scope.load = "loading";
      news.get({ action: $stateParams.id }, function(data) {
        $scope.news = data;
        $scope.load = '';
        $rootScope.$watch('arg', function() {
            if ($rootScope.arg === "English"){
              $scope.news.languageName = $scope.news.name_en;
              $scope.news.description = $scope.news.description_en;

            } else {
              $scope.news.languageName = $scope.news.name;
              $scope.news.description = $scope.news.description1;

            }
          $scope.news.description123 = $sce.trustAsHtml($scope.news.description);
        });
    });
  }]);
