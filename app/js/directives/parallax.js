angular.module('myApp').directive('parallax', ['$window', function($window) {
  return {
    restrict : 'A',
    link: function($scope, elem, attrs) {
      $('.parallax-window').parallax({imageSrc: 'http://cheremosh.lviv.ua/test/img/bg7.jpg'});
    }
  };

}]);
