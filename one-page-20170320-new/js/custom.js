/*Theme    : Narani
 * Author  : Design_mylife
 * Version : V1.1
 * 
 */





 // transparent header on scroll 
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.trans-before').addClass('trans-after');
      } else {
        $('.trans-before').removeClass('trans-after');
      }
    });
    
    
    
    
    //auto close collapse on click
    function close_toggle() {
if ($(window).width() <= 768) {
  $('.navbar-collapse a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });
}
else {
 $('.navbar .navbar-default a').off('click');
}
}
close_toggle();

$(window).resize(close_toggle); 


    
/* ==============================================
Smooth Scroll To Anchor
=============================================== */

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.navbar a,.btn').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//parallax
$(window).stellar({
    horizontalScrolling: false,
    responsive: true/*,
     scrollProperty: 'scroll',
     parallaxElements: false,
     horizontalScrolling: false,
     horizontalOffset: 0,
     verticalOffset: 0*/
});

//owl carousel for work
$(document).ready(function() {
 
  $("#work-carousel").owlCarousel({
      // Most important owl features
    items : 4,
    itemsCustom : false,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,3],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
    startDragging : true
  });
 
});


//owl carousel for testimonials
$(document).ready(function() {
 
  $("#testi-carousel").owlCarousel({
      // Most important owl features
    items : 1,
    itemsCustom : false,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
    startDragging : true
  });
 
});

/* ==============================================
 Counter Up
 =============================================== */
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 100,
        time: 800
    });
});


/* ==============================================
 WOW plugin triggers animate.css on scroll
 =============================================== */

var wow = new WOW(
        {
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 150, // distance to the element when triggering the animation (default is 0)
            mobile: false        // trigger animations on mobile devices (true is default)
        }
);
wow.init();
 
 /*========tooltip and popovers====*/
     /*==========================*/
    $("[data-toggle=popover]").popover();
    
    $("[data-toggle=tooltip]").tooltip();
	
	
/* ==============================================
 custom PRBC
 =============================================== */
  
         var myIndex = 0;
         carousel();
         
         function carousel() {
             var i;
             var x = document.getElementsByClassName("mySlides");
         
             for (i = 0; i < x.length; i++) {
                 $(x[i]).fadeOut(1000);
             }
         
             myIndex++;
         
             if (myIndex > x.length) {
                 myIndex = 1;
             }
             $(x[myIndex - 1]).stop().fadeIn(1000);
         
             setTimeout(carousel, 7000);
         };
         
         $(document).ready(function() {
         $("#biblicalAuth").show().delay(100);
         });
         
         $("#biblicalAuthLi").click(function(){
         $("#autonomyOf").hide();
         $("#priesthoodOf").hide();
         $("#twoOrdinances").hide();
         $("#individualSoul").hide();
         $("#savedAndBaptized").hide();
         $("#twoOffices").hide();
         $("#sepChurchState").hide();
         $("#biblicalAuth").show().delay(100);
         });
         $("#autonomyOfLi").click(function(){
         $("#biblicalAuth").hide();
         $("#priesthoodOf").hide();
         $("#twoOrdinances").hide();
         $("#individualSoul").hide();
         $("#savedAndBaptized").hide();
         $("#twoOffices").hide();
         $("#sepChurchState").hide();
         $("#autonomyOf").show().delay(100);
         });
         $("#priesthoodOfLi").click(function(){
         $("#biblicalAuth").hide();
         $("#autonomyOf").hide();
         $("#twoOrdinances").hide();
         $("#individualSoul").hide();
         $("#savedAndBaptized").hide();
         $("#twoOffices").hide();
         $("#sepChurchState").hide();
         $("#priesthoodOf").show().delay(100);
         });
         $("#twoOrdinancesLi").click(function(){
         $("#biblicalAuth").hide();
         $("#autonomyOf").hide();
         $("#priesthoodOf").hide();
         $("#individualSoul").hide();
         $("#savedAndBaptized").hide();
         $("#twoOffices").hide();
         $("#sepChurchState").hide();
         $("#twoOrdinances").show().delay(100);
         });
         $("#individualSoulLi").click(function(){
         $("#biblicalAuth").hide();
         $("#autonomyOf").hide();
         $("#priesthoodOf").hide();
         $("#twoOrdinances").hide();
         $("#savedAndBaptized").hide();
         $("#twoOffices").hide();
         $("#sepChurchState").hide();
         $("#individualSoul").show().delay(100);
         });
         $("#savedAndBaptizedLi").click(function(){
         $("#biblicalAuth").hide();
         $("#autonomyOf").hide();
         $("#priesthoodOf").hide();
         $("#twoOrdinances").hide();
         $("#individualSoul").hide();
         $("#twoOffices").hide();
         $("#sepChurchState").hide();
         $("#savedAndBaptized").show().delay(100);
         });
         $("#twoOfficesLi").click(function(){
         $("#biblicalAuth").hide();
         $("#autonomyOf").hide();
         $("#priesthoodOf").hide();
         $("#twoOrdinances").hide();
         $("#individualSoul").hide();
         $("#savedAndBaptized").hide();
         $("#sepChurchState").hide();
         $("#twoOffices").show().delay(100);
         });
         $("#sepChurchStateLi").click(function(){
         $("#biblicalAuth").hide();
         $("#autonomyOf").hide();
         $("#priesthoodOf").hide();
         $("#twoOrdinances").hide();
         $("#individualSoul").hide();
         $("#savedAndBaptized").hide();
         $("#twoOffices").hide();
         $("#sepChurchState").show().delay(100);
         });

