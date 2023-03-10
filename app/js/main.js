$(function () {

    // --- sub menu mobile open  --- //

    $('.arrow-features').on('click', function () {
        $('.arrow-features,.sub-menu__list-features').toggleClass('open');
    });

    $('.sub-menu__list a').on('click', function () {
        $('.arrow-features,.sub-menu__list-features').removeClass('open');
    });




    $('.arrow-pages').on('click', function () {
        $('.arrow-pages,.sub-menu__list-pages').toggleClass('open');
    });

    $('.sub-menu__list a').on('click', function () {
        $('.arrow-pages,.sub-menu__list-pages').removeClass('open');
    });

// --- sub menu mobile open  END --- //


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



    //  burger menu  //

    $('.burger').on('click', function () {
        $('.burger,.menu__inner').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.menu__inner a').on('click', function () {
        $('.burger,.menu__inner').removeClass('active');
        $('body').removeClass('lock');
    });



    //  slider-testimonial  //

    $('.slider-testimonial').slick({
        prevArrow: '<button type="button" class="slick-prev"><svg class="slick-arrow slick-arrow-prev "><use xlink: href = "images/sprite.svg#arrow-left"></use></svg></button>',

        nextArrow: '<button type="button" class="slick-next"><svg class="slick-arrow slick-arrow-next"><use xlink: href = "images/sprite.svg#arrow-left"></use></svg ></button>',
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    //------------------------------------//



    //  accordion   faq  //
    //  клас 'one', відкритий буде тільки один спойлер  //

    $('.accordion__item-top').click(function () {

      if ($('.accordion__item-top').hasClass('one')) {
        $('.accordion__item-top').not($(this)).removeClass('active');
        $('.accordion__item-content').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);

    });

    
    //  rating  //

    $(".slider-testimonial__author-rating").rateYo({
        starWidth: "28px",
        normalFill: "rgba(193, 193, 193, 0.5)",
        ratedFill: "rgba(255, 163, 55, 1)",
        spacing: "6px",
        fullStar: true,
    });


    //  tabs  //

    $('.tabs__link').on('click', function (e) {
        e.preventDefault();
        $('.tabs__link').removeClass('tabs__link--active');
        $(this).addClass('tabs__link--active');


        $('.tabs__content-item').removeClass('tabs__content-item--active');
        $($(this).attr('href')).addClass('tabs__content-item--active');

    });


});