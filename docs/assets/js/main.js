

function loadIframe(iframeName, url, Header) {
  document.getElementById("myModalLabel").innerHTML = Header;
  var $iframe = $('#' + iframeName);
  
  if ( $iframe.length ) {
      $iframe.attr('src',url);   
      return false;
  }
  return true;
  
}

jQuery(document).ready(function($){
	var isLateralNavAnimating = false;

	//open/close lateral navigation
	$('.cd-nav-trigger').on('click', function(event){
		
		//stop if nav animation is running 
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			
			$('body').toggleClass('navigation-is-open');
			$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
  });
  $('.nav-menu a').on('click', function(event){
		
		//stop if nav animation is running 
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			
			$('body').toggleClass('navigation-is-open');
			$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
	});


});

!(function($) {
  "use strict";
  $('#ModYoung2').on('hidden.bs.modal', function () {
    
    setTimeout(function loadIframe(iframeName, url, Header) {
      document.getElementById("myModalLabel").innerHTML = Header;
      var iframeName = 'ifrm';
      var url = '';
      var Header = '';
      var $iframe = $('#' + iframeName);
      
      if ( $iframe.length ) {
          $iframe.attr('src',url);   
          return false;
      }
      return true;
      
    },150);
  });
  
  // Hero typed
  if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }
  
  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('bx bx-menu-alt-left bx bx-left-arrow-alt', "easeOutSine");
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  //$(document).ready(function() {
   // if (window.location.hash) {
     // var initial_nav = window.location.hash;
      //if ($(initial_nav).length) {
        //var scrollto = $(initial_nav).offset().top;
       // $('html, body').animate({
          //scrollTop: scrollto
        //}, 1500, 'easeInOutExpo');
      //}
    //}
 // });
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
    //window hover

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
        $('.portfolio-container').isotope('layout');
      }
    });
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });


  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {

    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    var elem = document.querySelector('.servi');
    var pckry = new Packery( elem, {
      // options
      itemSelector: '.grid-item',
      gutter: 10
    });

    var elem = document.querySelector('.skilled');
    var pckry = new Packery( elem, {
      // options
      itemSelector: '.grid-item',
      gutter: 10
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });
  function epss() {
    
    };
  $( ".collapsed" ).click(function() {
    setTimeout(function(){ 
      $('.portfolio-container').isotope('layout');
     }, 300);
  });
  $('.modal').on('hidden.bs.modal', function () {
      player.stopVideo();
    });

  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: false,
    dots: true,
    loop: false,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-back",
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  })
  

})(jQuery)