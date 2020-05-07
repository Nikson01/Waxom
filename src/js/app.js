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
    nextArrow: '<span class="next"><svg class="svg next-slick"><use xlink:href="#right-arrow"/></svg></span>',
    prevArrow: '<span class="prev"> <svg class="svg prev-slick"><use xlink:href="#left-arrow"/></svg></span>',
  });

 

  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    arrows: true,
    nextArrow: '<span class="next-slick"><svg class="svg next-slick"><use xlink:href="#right-bot-arrow"/></svg></span>',
    prevArrow: '<span class="prev-slick"><svg class="svg prev-slick"><use xlink:href="#left-bot-arrow"/></svg></span>',
    dots: false,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,        
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },  
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
});