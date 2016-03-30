angular.module('myApp')
  .directive('animate', function () {
    return {
      restrict : 'A',
      link: function ($scope, element, attr) {
        $(".animation_1").animated("flipInY", "fadeOutDown");
        $(".animation_2").animated("fadeInLeft", "fadeOutDown");
        $(".animation_3").animated("fadeInRight", "fadeOutDown");

      }
    }
  })
