angular.module('myApp')
  .directive('hideSidebarMenu', function () {
    return {
      restrict : 'A',
      link: function ($scope, element, attr) {
        jQuery(document).ready(function($) {
          $('.hd-icon-menu').click(function(e) {
            var sidebar = $('.hide-sidebar');
            var sidebarWidth = $('.hide-sidebar').width();
            $('.header, .main-content').addClass('active');
            if (sidebar.css('left') != sidebarWidth) {
              sidebar.addClass('active');
              var firstClick = true;
              $(document).bind('click.myEvent', function(e) {
                if (!firstClick && $(e.target).closest('.hide-sidebar').length == 0) {
                  sidebar.removeClass('active');
                  $('.header, .main-content').removeClass('active');
                  $(document).unbind('click.myEvent');
                }
                firstClick = false;
              });
            }
            e.preventDefault();
          });
        });
      }
    }
  })
