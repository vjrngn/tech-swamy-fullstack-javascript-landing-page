
 //Client Carousel
$("#courses-slider").owlCarousel({
       autoplay: true,
  // autoplayTimeout: 1000,
    lazyLoad: true,
   smartSpeed: 500,
        items: 1, //Set Testimonial items
        loop: true,
        margin: 10,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        nav: true,
        dots: true,
        navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        480:{
            items:1,
        },
        568:{
            items:1,
        },
        600:{
            items:1,
        },
        667:{
            items:1,
        },
        1000:{
            items:1,
        }
    }   
        
    });


$("#toppers-silder").owlCarousel({
        //autoPlay: 5000, //Set AutoPlay to 5 seconds
        autoplay: false,
        //smartSpeed: 2000, // Default is 250
        items: 2, //Set Testimonial items
        loop: true,
        center: true,
        margin: 0,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: true,
        nav: true,
        dots: true,
        navText: ["<i class='fal fa-angle-left'></i><span>Previous</span>", "<span>Next</span><i class='fal fa-angle-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav: true,
             autoplay: true,
        },
        480:{
            items:1,
            nav: true,
             autoplay: true,
        },
        568:{
            items:2,
            nav: true,
        },
        600:{
            items:2,
        },
        667:{
            items:2,
        },
        1000:{
            items:2
        }
    }   
        
    });


 //Client Carousel
$("#meet-slider").owlCarousel({
       autoplay: true,
  // autoplayTimeout: 1000,
    lazyLoad: true,
   smartSpeed: 500,
   animateOut: 'fadeOut',
   animateIn: 'fadeIn',
        items: 1, //Set Testimonial items
        loop: true,
        margin: 10,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        nav: true,
        dots: true,
        navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        480:{
            items:1,
        },
        568:{
            items:1,
        },
        600:{
            items:1,
        },
        667:{
            items:1,
        },
        1000:{
            items:1,
        }
    }   
        
    });

$("#benefits-slider").owlCarousel({
        //autoPlay: 5000, //Set AutoPlay to 5 seconds
        autoplay: false,
        //smartSpeed: 2000, // Default is 250
        items: 3, //Set Testimonial items
        loop: true,
        margin: 15,
        singleItem: false,
        touchDrag: false,
        mouseDrag: false,
        pagination: true,
        nav: false,
        dots: true,
        navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            stagePadding: 50,
            singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        autoplay: true,
        },
        480:{
            items:1,
            stagePadding: 50,
             singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        autoplay: true,
        },
        568:{
            items:2,
             stagePadding: 50,
             singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        600:{
            items:3,
             singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        667:{
            items:3,
        },
        1000:{
            items:3
        }
    }   
        
    });

$("#ticker-slider").owlCarousel({
        //autoPlay: 5000, //Set AutoPlay to 5 seconds
        autoplay: false,
        //smartSpeed: 2000, // Default is 250
        items: 3, //Set Testimonial items
        loop: true,
        margin: 30,
        singleItem: false,
        touchDrag: false,
        mouseDrag: false,
        pagination: true,
        nav: false,
        dots: false,
        navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
             stagePadding: 30,
             center: true,
             singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: true,
         dots: true,
         margin: 10,
          autoplay: true,
        },
        480:{
            items:1,
             stagePadding: 30,
             center: true,
              autoplay: true,
        },
        568:{
            items:1,
        },
        600:{
            items:2,
        },
        667:{
            items:2,
        },
        1000:{
            items:3
        }
    }   
        
    });



if ($('.scene, .scene1').length > 0) {
        $('.scene, .scene1').parallax({
            scalarX: 10.0,
            scalarY: 15.0,
        });
    };


    
/**
     * ======================================
     * 37. title animation
     * ======================================
     */
    if ($(".title-anim").length > 0) {
      let char_come = gsap.utils.toArray(".title-anim");
      char_come.forEach((char_come) => {
        let split_char = new SplitText(char_come, {
          type: "chars, words",
          lineThreshold: 0.5,
        });
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: char_come,
            start: "top 90%",
            end: "bottom 60%",
            scrub: false,
            markers: false,
            toggleActions: "play none none none",
          },
        });
        tl2.from(split_char.chars, {
          duration: 0.8,
          x: 70,
          autoAlpha: 0,
          stagger: 0.03,
        });
      });
    }

/* -------------------------------  
         WOW ANIMATED JS START
/* ----------------------------- */

// Elements Animation
    if($('.wow').length){
        var wow = new WOW(
          {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true       // act on asynchronously loaded content (default is true)
          }
        );
        wow.init();
    }


/* -------------------------------	
		INPUT PLACEHOLDER
/* ----------------------------- */

$('input,textarea').focus(function(){

   $(this).data('placeholder',$(this).attr('placeholder'))

          .attr('placeholder','');

}).blur(function(){

   $(this).attr('placeholder',$(this).data('placeholder'));

});

/* ---------------------	
		back-top
/* --------------------- */

if ($('#back-top').length) {

    var scrollTrigger = 100, // px

        backToTop = function () {

            var scrollTop = $(window).scrollTop();

            if (scrollTop > scrollTrigger) {

                $('#back-top').addClass('show');

            } else {

                $('#back-top').removeClass('show');

            }

        };

    backToTop();

    $(window).on('scroll', function () {

        backToTop();

    });

    $('#back-top').on('click', function (e) {

        e.preventDefault();

        $('html,body').animate({

            scrollTop: 0

        }, 700);

    });

}


$('a[href^="#applyBox"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 300) {
        $('#sideNavi').fadeIn();
    } else {
        $('#sideNavi').fadeOut();
    }
});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 300) {
        $('.bouncebtn').fadeIn();
    } else {
        $('.bouncebtn').fadeOut();
    }
});
