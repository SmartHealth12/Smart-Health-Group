(function ($) {
 "use strict";

 /* meanmenu */
 $('#mobile-menu').meanmenu({
	 meanMenuContainer: '.mobile-menu',
	 meanScreenWidth: "767" 
 });


/* slider-active */
$('.slider-active').owlCarousel({
    loop:true,
    nav:true,
	dots:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1,
			dots:false,
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

/* parallax-active */

 $('.parallax-active').parallax("50%", 0.4);

  /* counter */

$('.counter').counterUp();

   /* scrollUp */

$.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });

/* magnificPopup */
$('.img-zoom').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
  // other options
});

/* blog-active */
$('.blog-active').owlCarousel({
    loop:true,
    nav:true,
	dots:false,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
		768:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

/* testimonial-active */
$('.testimonial-active').owlCarousel({
    loop:true,
    nav:false,
	dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})


/* health-active */
$('.health-active').owlCarousel({
    loop:true,
    nav:true,
	dots:false,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
		768:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

/* team-active */
$('.team-active').owlCarousel({
    loop:true,
    nav:true,
	dots:false,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

/* brand-active */
$('.brand-active').owlCarousel({
    loop:true,
    nav:false,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
       450:{
            items:2
        },
        768:{
            items:4
        },
        1000:{
            items:6
        }
    }
})



/*-------------------------------------------
    	02. wow js active
    --------------------------------------------- */
    new WOW().init();	

  /* $(".click-me").click(function(){
	$("#comments-area").toggle(900);
  }); */
})(jQuery);