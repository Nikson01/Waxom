$(document).ready(function () {

  // onclick burger mobile function
  $(".nav-tools__burger").on("click", function () {
    $(".nav-tools__burger").toggleClass("nav-tools__burger-open");
    $(".header_nav-bar").toggleClass("burger-menu-click");

    if ($(".burger-menu__block-show")) {
      $(".nav-tools__search-block_click").removeClass("nav-tools__search-block_click-show");
      $(".nav-tools__search").removeClass("nav-tools-close");
    }
  });
  // End


// Number counter animation
  $(".num").counterUp({delat:10, time: 1000});
// End of Number counter

// Onclick search button in header function
  $(".nav-tools__search").on("click", function () {
    $(".nav-tools__search-block_click").toggleClass("nav-tools__search-block_click-show");
    $(".nav-tools__search").toggleClass("nav-tools-close"); 
  });



  // Styles for slick sliders

  $('.single-item').slick({
		infinite: true,
    arrows: true,
    nextArrow: '<span class="next"><img src="../images/right.svg" class="svg next-slick" alt="1"></span>',
    prevArrow: '<span class="prev"><img src="../images/left.svg" class="svg prev-slick" alt="1"></span>',
  });

  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    arrows: true,
    nextArrow: '<span class="next-slick"><img src="../images/right-arrow-bot-slick.svg" class="svg next-slick" alt="1"></span>',
    prevArrow: '<span class="prev-slick"><img src="../images/left-arrow-bot-slick.svg" class="svg prev-slick" alt="1"></span>',
    dots: false,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,        
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.item-inside__top').slick({
    infinite: true,
    dots: true,
    dotsClass: "my-dots",
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
  });

  // End of styles for Slick sliders


    /*
     * Replace all SVG images with inline SVG
     */
    jQuery('img.svg').each(function(){
      var $img = jQuery(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');

      jQuery.get(imgURL, function(data) {
          // Get the SVG tag, ignore the rest
          var $svg = jQuery(data).find('svg');

          // Add replaced image's ID to the new SVG
          if(typeof imgID !== 'undefined') {
              $svg = $svg.attr('id', imgID);
          }
          // Add replaced image's classes to the new SVG
          if(typeof imgClass !== 'undefined') {
              $svg = $svg.attr('class', imgClass+' replaced-svg');
          }

          // Remove any invalid XML tags as per http://validator.w3.org
          $svg = $svg.removeAttr('xmlns:a');

          // Replace image with new SVG
          $img.replaceWith($svg);

      }, 'xml');

  });


});