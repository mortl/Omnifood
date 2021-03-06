$(document).ready(function () {

  /* For sticky nav */
  $('.js--section-features').waypoint(function (direction) {

    if (direction == "down") {
      $('nav').addClass('sticky-nav');

    } else {
      $('nav').removeClass('sticky-nav');


    }
  }, {
    offset: '60px;'
  });


  /*scolling to button  */

  $('.js--scroll-to-plans').click(function () {

    $('html, body').animate({
      scrollTop: $('.js--section-plans').offset().top
    }, 1000);

  });

  $('.js--scroll-to-start').click(function () {

    $('html, body').animate({
      scrollTop: $('.js--section-features').offset().top
    }, 1000);

  });


  /* Navigation Scroll */

  /* $(function () {
    $('a[href*=#]:not([href=#])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  }); */

  // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

/* Animations on scroll */

//features fade in
  $('.js--wp-1').waypoint(function(direction){
      $('.js--wp-1').addClass('animated fadeIn');
    },
    {
      offset:'50%'
        });
        // app screen 
  $('.js--wp-2').waypoint(function(direction){
      $('.js--wp-2').addClass('animated fadeInUp');
    },
    {
      offset:'50%'
        });

//cities 
  $('.js--wp-3').waypoint(function(direction){
      $('.js--wp-3').addClass('animated fadeIn');
    },
    {
      offset:'50%'
        });

//pricing plan most expensive.
  $('.js--wp-4').waypoint(function(direction){
      $('.js--wp-4').addClass('animated pulse');
    },
    {
      offset:'50%'
        });

  /* Mobile navigation */

  $('.js--nav-icon').click(function()
  {
      var nav = $('.js--main-nav');
      var icon = $('.js--nav-icon i');
      
      var openIcon = 'ion-navicon-round';
      var closeIcon = 'ion-close-round';
      nav.slideToggle(300);

      if(icon.hasClass(openIcon)){
        icon.addClass(closeIcon);
        icon.removeClass(openIcon);
      } else {
        icon.addClass(openIcon);
        icon.removeClass(closeIcon);
      }

  });


  new GMaps({
    div:'.map',
    lat:44.3653071,
    lng:-79.7012648,
    zoom:12
  });
}); //main close brackets