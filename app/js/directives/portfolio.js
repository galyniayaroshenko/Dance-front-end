
  angular.module('myApp')
    .directive('pop', function () {
      return {
        restrict : 'A',
        link: function ($scope, element, attr) {
          $(".popup_content").magnificPopup({
            type:"inline",
            midClick: true
          });
        }
      }
    })
