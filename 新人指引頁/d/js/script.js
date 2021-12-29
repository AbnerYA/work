$(document).ready(function () {
    // get tallest tab__content element
      let height = -1;

        $('.tab__content').each(function() {
            height = height > $(this).outerHeight() ? height : $(this).outerHeight();
         $(this).css('position', 'absolute');
        });

      // set height of tabs + top offset
        $('[data-tabs]').css('min-height', height + 40 + 'px');
        
    
        var scrollTop = $(".scrollTop");

        $(window).scroll(function() {
        // declare variable
        var topPos = $(this).scrollTop();

        // if user scrolls down - show scroll to top button
        if (topPos > 100) {
          $(scrollTop).css("opacity", "1");

        } else {
          $(scrollTop).css("opacity", "0");
        }

        }); // scroll END

        //Click event to scroll to top
        $(scrollTop).click(function() {
        $('html, body').animate({
          scrollTop: 0
        }, 800);
        return false;

        }); // click() scroll top EMD
});// JavaScript Document