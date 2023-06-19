
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

/* =============================AVAILABILITY-SLIDER============================ */


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

/* =============================CHOICE-SLIDER============================ */


/* =============================SMOOTH-SCROLL============================ */

$(".header__inner-menu a, .cisterns__inner-btn a, .footer__inner-info a, .footer__inner-products a").on("click", function (e) {
    //отменяем стандартную обработку нажатия по ссылке
    e.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 700);
});

/* =============================SMOOTH-SCROLL============================ */


/* =============================PopUp============================ */

let popupback = document.querySelector('.availability__popup'); // Фон попап окна
let popup_body = document.querySelector('.popup'); // Само окно
let openPopupBtn = document.querySelectorAll('.availability__btn-popup'); // Кнопки для показа окна
let closePopupBtn = document.querySelector('.popup__inner-close'); // Кнопка для скрытия окна

openPopupBtn.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupback.classList.add('active'); // Добавляем класс 'active' для фона
        popup_body.classList.add('active'); // И для самого окна
    })
});

closePopupBtn.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupback.classList.remove('active'); // Убираем активный класс с фона
    popup_body.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popup_body) { // Если цель клика - фот, то:
        popupback.classList.remove('active'); // Убираем активный класс с фона
        popup_body.classList.remove('active'); // И с окна
    }
});

/* =============================PopUp============================ */


