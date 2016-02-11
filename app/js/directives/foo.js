angular.module('myApp')
  .directive('foo', function () {
    return {
      restrict : 'A',
      link: function ($scope, element, attr) {
        element.on('click', function () {
            console.log('click');
            if (element.text() === 'Play'){
              element.text('Stop');
            } else {
              element.text('Play');
            }
        });
        console.log("foo");


      }
    }
  })
