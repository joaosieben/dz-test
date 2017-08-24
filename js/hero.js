// Shorthand for $( document ).ready()
$(function() {
    $('#hero .carousel').slick({
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '#hero .prev',
      nextArrow: '#hero .next'
    });
});
