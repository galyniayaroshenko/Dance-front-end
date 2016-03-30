angular.module('myApp')
  .controller('GenreViewController', ['$scope','$stateParams', 'GenreView',
    function($scope, $stateParams, GenreView) {
      GenreView.get({action:$stateParams.id}, function(data){
            $scope.songs = [];
            $scope.genre= data.genre;
            for (var i = 0; i < $scope.genre.length; i++) {
              $scope.songs.push({id: $scope.genre[i]._id,
                      title: $scope.genre[i].title,
                      url: $scope.genre[i].url});
            };
    });
  }]);
