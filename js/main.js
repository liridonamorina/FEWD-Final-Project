$(document).ready(function() {
  $(".check-in").datepicker({
    dateFormat: "d MM yy",
    duration: "medium"
  });

  $(".check-out").datepicker({
    dateFormat: "d MM yy",
    duration: "medium"
  });

  $(".slick-carousel").slick({
    autoplay: true,
    speed: 2000,
    arrows: false,
    dots: true,
    fade: true,
    cssEase: "linear",
    touchMove: true
  });

  //////////////////////////////////ANIMATION////////////////////////////////////
  AOS.init();

  $(".slick-carousel").on("beforeChange", function(event,slick,currentSlide,nextSlide) {
    $(".animated").removeClass("aos-init").removeClass("aos-animate");
  });


  $(".slick-carousel").on("afterChange", function(event,slick,currentSlide,nextSlide) {
    AOS.init();
  });
});
