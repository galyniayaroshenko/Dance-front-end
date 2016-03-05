angular.module('myApp')
  .controller('newsViewController', ['$scope','$stateParams', '$rootScope', 'news', '$sce',
    function($scope, $stateParams, $rootScope, news , $sce) {
    console.log($stateParams.id);
      news.get({ action: $stateParams.id }, function(data) {
        $scope.news = data;

        $rootScope.$watch('arg', function() {
          console.log("rootscope",$rootScope.arg);
          console.log('lili', $scope.news);
            if ($rootScope.arg === "English"){
              $scope.news.languageName = $scope.news.name_en;
              $scope.news.description = $scope.news.description_en;

            } else {
              $scope.news.languageName = $scope.news.name;
              $scope.news.description = $scope.news.description1;

            }
          console.log('!@#asdlanguageName', $scope.news);
          $scope.news.description1 = $sce.trustAsHtml($scope.news.description);
        });
    });
  }]);
