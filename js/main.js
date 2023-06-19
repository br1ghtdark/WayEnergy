
/*=========================Burger_menu========================*/

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
        $('.burger').addClass('burger--follow')
    } else {
        $('.burger').removeClass('burger--follow')
    }
})

$('.burger, .burger--follow, .overlay').on('click', function (e) {
e.preventDefault()
$('.header__top').toggleClass('header__top--open')
$('.overlay').toggleClass('overlay--show')
$('.burger').toggleClass('burger--active')
})

/*=========================Burger_menu========================*/

/* =============================AVAILABILITY-SLIDER============================ */
/* =============================AVAILABILITY-SLIDER============================ */

new Swiper('.availability__slider', {
    slidesPerView: "auto",
    spaceBetween: 20,
    slideClass: "availability__slider-item",
    navigation: {
        nextEl: ".availability__arrows-right",
        prevEl: ".availability__arrows-left"
    },
    speed: 1300,
});


/* =============================CHOICE-SLIDER============================ */
/* =============================CHOICE-SLIDER============================ */

new Swiper('.choice__slider', {
    slidesPerView: "auto",
    spaceBetween: 20,
    slideClass: "choice__slider-item",
    navigation: {
        nextEl: ".choice__arrows-right",
        prevEl: ".choice__arrows-left"
    },
    speed: 1300,
});

