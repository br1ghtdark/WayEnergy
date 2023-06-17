
/* =============================AVAILABILITY-SLIDER============================ */
/* =============================AVAILABILITY-SLIDER============================ */

new Swiper('.availability__slider', {
    slidesPerView: 'auto',
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
    slidesPerView: 'auto',
    spaceBetween: 20,
    slideClass: "choice__slider-item",
    // navigation: {
    //     nextEl: ".availability__arrows-right",
    //     prevEl: ".availability__arrows-left"
    // },
    speed: 1300,
});