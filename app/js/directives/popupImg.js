angular.module('myApp')
  .directive('popup', function () {
    return {
      restrict : 'A',
      link: function ($scope, element, attr) {
        $(".popup").magnificPopup({type:"image"});
      }
    }
  })
