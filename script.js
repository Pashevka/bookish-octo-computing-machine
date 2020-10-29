$(document).ready(function() {
  document.getElementsByTagName("body")[0].style.opacity = 1;
  $(".kata-slider").slick({});
  $(".kata-slider-access").slick({
    dots: true,
    arrows: false,
  });
});