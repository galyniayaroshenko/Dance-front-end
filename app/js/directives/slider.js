// angular.module('myApp')
//   .directive('slider', function () {
//     return {
//       restrict : 'A',
//       scope {
//         peopleEffortList: '@';
//       }
//       templateUrl: 'templates/slider.html',
//       link: function ($scope, element, attr) {
//         $("#owl-demo").owlCarousel({
//       	items : 1,
//       	nav : true,
//         jsonSuccess : customDataSuccess($scope.peopleEffortList),
//       	navText : "",
//       	loop : true,
//       	autoplay : true,
//       	autoplayHoverPause : true,
//       	fluidSpeed : 600,
//       	autoplaySpeed : 600,
//       	navSpeed : 600,
//       	dotsSpeed : 600,
//       	dragEndSpeed : 600
//       });
//       function customDataSuccess(data){
//         var content = "";
//         for(var i in data){
//
//           var foto = data[i].foto.url;
//           var name = data[i].name;
//           console.log('d',data);
//
//
//           content += "<img src=\"" +foto+ "\" alt=\"" +name+ "\">"
//         }
//         $("#owl-demo").html(content);
//       };
//       }
//     }
//   })

// <div class='img-wrap'>
//   <img src= "+foto+ " >
// </div>
// <h3>" + name + "</h3>
// <div class='slide-descr'>" + profession + "</div>
// <p>" + description + "</p>

// <div>
//   <img src= "+foto+ " >
// </div>
// <h3>" + name + "</h3>
// <div>" + profession + "</div>
// <p>" + description + "</p>


  //   <div class='img-wrap'>
  //     <img src= "+foto+ " >
  //   </div>
  //
  // <h3>" + name + "</h3>
  // <div class='slide-descr'>" + profession + "</div>
  // <p>" + description + "</p>
