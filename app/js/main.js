$(function () {

  //  burger menu  //

  // $('.burger').on('click', function () {
  //   $('.burger,.menu__list').toggleClass('active');
  //   $('body').toggleClass('lock');
  // });

  // $('.menu__list a').on('click', function () {
  //   $('.burger,.menu__list').removeClass('active');
  //   $('body').removeClass('lock');
  // });




  //  slider-testimonial  //

   $('.slider-testimonial').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg class="slick-arrow slick-arrow-prev "><use xlink: href = "images/sprite.svg#arrow-left"></use></svg></button>',

    nextArrow: '<button type="button" class="slick-next"><svg class="slick-arrow slick-arrow-next"><use xlink: href = "images/sprite.svg#arrow-left"></use></svg ></button>',
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    fade: true,
   //  adaptiveHeight: true,
   //  responsive: [
   //    {
   //      breakpoint: 992,
   //      settings: {
   //        slidesToShow: 1,
   //        slidesToScroll: 1,
   //        arrows: false
   //      }
   //    }
   //  ]
  });



  //  accordion  //
  //  клас 'one', відкритий буде тільки один спойлер  //

  // $('.accordion__item-top').click(function () {

  //   if ($('.accordion__item-top').hasClass('one')) {
  //     $('.accordion__item-top').not($(this)).removeClass('active');
  //     $('.accordion__item-content').not($(this).next()).slideUp(300);
  //   }
  //   $(this).toggleClass('active').next().slideToggle(300);

  // });




  //  fixed header  //

  $(window).scroll(function () {
    let menu = $('.menu');
    if ($(this).scrollTop() > 1) {
      menu.addClass('menu-fixed');
    } else {
      menu.removeClass('menu-fixed');
    }
  });

   //  rating  //

   $(".slider-testimonial__author-rating").rateYo({
      starWidth: "28px",
      normalFill: "rgba(193, 193, 193, 0.5)",
      ratedFill: "rgba(255, 163, 55, 1)",
      spacing: "6px",
      fullStar: true,
   });


  //  Плавний скрол  //

  // $(".footer__logo,.logo, .main-section__link").on("click", function (event) {
  //   event.preventDefault();
  //   var id = $(this).attr('href'),
  //     top = $(id).offset().top;
  //   $('body,html').animate({ scrollTop: top }, 1000);
  // });





  //  tabs  //

  $('.tabs__link').on('click', function (e) {
    e.preventDefault();
    $('.tabs__link').removeClass('tabs__link--active');
    $(this).addClass('tabs__link--active');

     
    $('.tabs__content-item').removeClass('tabs__content-item--active');
    $($(this).attr('href')).addClass('tabs__content-item--active');

  });



  
  //=======================//



});