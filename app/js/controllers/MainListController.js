angular.module('myApp')
.controller('MainListController',
  ['$scope', '$state', '$window', 'AboutUs', 'Portfolio', 'PeopleEffort', 'Contact', '$stateParams', 'Category','$timeout',
    function($scope, $state, $window, AboutUs, Portfolio, PeopleEffort, Contact, $stateParams, Category, $timeout) {
  //$scope.musicList = Music.get();
  Category.get(function(data) {
    $scope.category = data.results;
    console.log($scope.category);
  })
 AboutUs.get(function(data){
    $scope.aboutUsList = data.results;
    console.log('AboutUs', $scope.aboutUsList);

    for (var i = 0; i < $scope.aboutUsList.length; i++) {
      $scope.aboutUsList[i].description1 = $scope.aboutUsList[i].description1.substring(0,700);
    }
    // $(document).ready(function() {
    //   $(".popup").magnificPopup({type:"image"});
    // });
    });


 Portfolio.get(function(data){
    $scope.portfolioUsList = data.results;
    if ($scope.portfolioUsList) {
      $timeout(function() {
          console.log('Portholio', $scope.portfolioUsList);
          $(document).ready(function() {
            $('.asd').addClass("filter");
            $("#portfolio_grid").mixItUp();

            $(".s_portfolio li").click(function() {
              $(".s_portfolio li").removeClass("active");
              $(this).addClass("active");
            });
            $(".portfolio_item").each(function(i) {
              $(this).find("a").attr("href", "#work_" + i);
              $(this).find(".podrt_descr").attr("id", "work_" + i);
            });
          });
        }, 5000);

    }
    });


 PeopleEffort.get(function(data){
    $scope.peopleEffortList = data.results;
    console.log('PeopleEffort', $scope.peopleEffortList);
    $(document).ready(function() {
    $("#owl-demo").owlCarousel({
    items : 1,
    nav : true,
    jsonSuccess : customDataSuccess($scope.peopleEffortList),
    navText : "",
    loop : true,
    autoplay : true,
    autoplayHoverPause : true,
    fluidSpeed : 600,
    autoplaySpeed : 600,
    navSpeed : 600,
    dotsSpeed : 600,
    dragEndSpeed : 600
  });
  function customDataSuccess(data){
    console.log('data', data);
    var content = "";
    for(var i in data){

      var foto = data[i].foto.url;
      var name = data[i].name;
      console.log('f', foto);
      console.log('m', name);
      var profession = data[i].profession;
      var description = data[i].description;

      content += "<div><div class='img-wrap'><img src= "+foto+"></div><h3>"+name+"</h3><div class='slide-descr'>"+profession+"</div><p>"+description+"</p></div>"
console.log('c', content);
      console.log('i', i);
    }
    $("#owl-demo").html(content);
  };
})
    });
  Contact.get(function(data){
    $scope.contactList = data.results;
    console.log('Contact', $scope.contactList);

    });

console.log("smile");
}]);
