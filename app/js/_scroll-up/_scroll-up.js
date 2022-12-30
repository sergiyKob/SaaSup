// --- scroll-up ---//

// click
$('.scroll-up ').click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1500);
  return false;
});

// onScroll
$(window).scroll(function () {
  var scroll = $('.scroll-up');
  if ($(this).scrollTop() > 950) {
    scroll.addClass('scroll-up--active');
  } else {
    scroll.removeClass('scroll-up--active');
  }
});

// --- scroll-up END ---//