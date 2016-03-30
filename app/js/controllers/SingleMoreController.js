angular.module('myApp')
  .controller('SingleMoreController', ['$scope','$stateParams', '$rootScope', 'AboutUs',
    function($scope, $stateParams, $rootScope, AboutUs) {
      AboutUs.get({action: $stateParams.id }, function(data) {
        $scope.viewAboutUs = data;
        $rootScope.$watch('arg', function() {
            if ($rootScope.arg === "English"){
              $scope.viewAboutUs.languageName = $scope.viewAboutUs.name_en;
              $scope.viewAboutUs.languageTitle = $scope.viewAboutUs.title_en;
              $scope.viewAboutUs.description = $scope.viewAboutUs.description_en;
            } else {
              $scope.viewAboutUs.languageName = $scope.viewAboutUs.name;
              $scope.viewAboutUs.languageTitle = $scope.viewAboutUs.title1;
              $scope.viewAboutUs.description = $scope.viewAboutUs.description1;
            }
        });
      });
  }]);
