(function($) {
    "use strict";

      $(window).on('scroll', function() {
         if ($(window).scrollTop() > 200) {
             $('.scrolling-navbar').addClass('top-nav-collapse');
         } else {
             $('.scrolling-navbar').removeClass('top-nav-collapse');
         }
       });

       new WOW().init();

       $('.main-navigation').onePageNav({
               currentClass: 'active'
       });
       $(window).on('load', function() {
           $('body').scrollspy({
               target: '.navbar-collapse',
               offset: 195
           });
           $(window).on('scroll', function() {
              if ($(window).scrollTop() > 200) {
                  $('.fixed-top').addClass('menu-bg');
              } else {
                  $('.fidex-top').removeClass('menu-bg');
              }
            });
        });

        $('.mobile-menu').slicknav({
          prependTo: '.navbar-haeader',
          parentTag: '.span',
          allowParentLinks: true,
          duplicate: false,
          label: '',
        });



        $('.counter').counterUp({
          time: 1000
        });



    $('#portfolio').mixItUp();



     var owl = $(".touch-slide");
     owl.owlCarousel({
        navigation: false,
        pagination: true,
        slideSpeed: 1000,
        stopOnHoner: true,
        autoPlay: true,
        items: 2,
        itemsDesktop : [1199,2],
        itemsDesktopSmall: [1024,2],
        itemTablet: [600,1],
        itemsMobile: [479,1],
     });

     $('.touch-slider').find('.owl-prev').html('<i class="fa fa-chevron-left"></i>');  
     $('.touch-slider').find('.owl-next').html('<i class="fa fa-chevron-right"></i>');
      
     // sticky nav
     $(window).on('scroll', function() {
         if ($(window).scrollTop() > 200) {
             $('.header-top-area').addClass('menu-bg');
         } else {
            $('.header-top-area').removeClass('menubg');
         }
     });

     var scrollAnimationTime = 1200,
         scrollAnimationTime = 'easeInOutExpo';
     $('a.scroll').on('bind','click.smoothscroll', function(event) {
        event.preventDefault();
        var target = this.hash;
        $('html,boby').stop().animate({
             'scrollTop': $(target).offset().top
        }, scrollAnimationTime, scrollAnimation, function () {
             window.location.hash = target;
        });
    });
    // back top link

     var offset = 200;
     var duration = 500;
     $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
    });
    $('.back-to-top').on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    })


    $('.lightbox').nivoLightbox({
     effect: 'fadeScale',
     keyboardNav: true,
    });

    $.stellar({
      horizontalScrolling: true,
      verticalOffset: 40,
      responsive: true
    });

    $('#loader').fadeOut();
}(jQuery));