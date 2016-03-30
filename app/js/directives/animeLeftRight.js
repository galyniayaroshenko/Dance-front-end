angular.module('myApp')
  .directive('leftRightAnimate', function () {
    return {
      restrict : 'A',
      link: function ($scope, element, attr) {
        $(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
        $(".right .resume_item").animated("fadeInRight", "fadeOutDown");

      }
    }
  })
