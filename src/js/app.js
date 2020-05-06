$(document).ready(function () {

  new WOW().init();

  $(".nav-tools__search").on("click", function () {
    $(".nav-tools__search-block_click").toggleClass("nav-tools__search-block_click-show");
    $(".nav-tools__search").toggleClass("nav-tools-close"); // $('.header').toggleClass('header-onclick-search_and_burg');

    if ($(".nav-tools__search-block_click-show")) {
      $(".nav-tools__burger").removeClass("nav-tools__burger-open");
      $(".burger-menu__block").removeClass("burger-menu__block-show");
    }
  });


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
    slidesToScroll: 3
  });

  $('.item-inside__top').slick({
    infinite: true,
    dots: true,
    dotsClass: "my-dots",
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
  });


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