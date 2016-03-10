angular.module('myApp')
  .directive('headerAnimate', function () {
    return {
      restrict : 'A',
      link: function ($scope, element, attr) {
        // $(".section_header").animated("fadeInUp", "fadeOutDown");
        $(".section_header").animated("fadeInUp");
      }
    }
  })
