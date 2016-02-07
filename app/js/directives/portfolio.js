angular.module('myApp')
  .directive('portfolio', function () {
    return {
      restrict : 'A',
      link: function ($scope, element, attr) {
        $(".popup").magnificPopup({type:"image"});
        $(".popup_content").magnificPopup({
          type:"inline",
          midClick: true
        });

      	$("#portfolio_grid").mixItUp();

      	$(".s_portfolio li").click(function() {
      		$(".s_portfolio li").removeClass("actives");
      		$(this).addClass("actives");
      	});

        $(".portfolio_item").each(function(i) {
          $(this).find("a").attr("href", "#work_" + i);
          $(this).find(".podrt_descr").attr("id", "work_" + i);
        });
      }
    }
  })
