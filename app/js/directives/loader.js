angular.module('myApp')
  .directive('loader', function () {
    return {
      restrict : 'A',
      link: function ($scope, element, attr) {
        $(window).load(function() {

        	$(".loader_inner").fadeOut();
        	$(".loader").delay(400).fadeOut("slow");

        });


      }
    }
  })
