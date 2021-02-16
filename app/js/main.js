$(function () {

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });
  $('.blog-page__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><?xml version="1.0" encoding="UTF-8"?><?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10pt" height="20pt" viewBox="0 0 10 20" version="1.1"><g ><path d="M 1.238281 9.335938 L 6.550781 4.023438 C 6.917969 3.65625 7.511719 3.65625 7.875 4.023438 L 8.757812 4.90625 C 9.125 5.273438 9.125 5.867188 8.757812 6.230469 L 4.996094 10 L 8.761719 13.765625 C 9.128906 14.132812 9.128906 14.726562 8.761719 15.089844 L 7.878906 15.976562 C 7.511719 16.34375 6.917969 16.34375 6.554688 15.976562 L 1.242188 10.664062 C 0.871094 10.296875 0.871094 9.703125 1.238281 9.335938 Z M 1.238281 9.335938 "/></g></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="10pt" height="20pt" viewBox="0 0 10 20" version="1.1"><g ><path d="M 8.761719 10.664062 L 3.449219 15.976562 C 3.082031 16.34375 2.488281 16.34375 2.125 15.976562 L 1.242188 15.09375 C 0.875 14.726562 0.875 14.132812 1.242188 13.769531 L 5.007812 10.003906 L 1.242188 6.238281 C 0.875 5.871094 0.875 5.277344 1.242188 4.914062 L 2.121094 4.023438 C 2.488281 3.65625 3.082031 3.65625 3.445312 4.023438 L 8.757812 9.335938 C 9.128906 9.703125 9.128906 10.296875 8.761719 10.664062 Z M 8.761719 10.664062 "/></g></svg></button>',
    infinite: false
  });
  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },

  });
  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');
    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');

  });
  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1051,
        settings: {
          draggable: true
        }
      },
    ]
  });
  
  $('.shop__filter-btn').on('click', function () {
    $('.shop__filters').slideToggle();
  })
  $('.button-list').on('click', function () {
    $('.product-item').addClass('product-item--list');
    $('.shop-content__inner').addClass('shop-content--nogrid');
  });
  $('.button-grid').on('click', function () {
    $('.product-item').removeClass('product-item--list');
    $('.shop-content__inner').removeClass('shop-content--nogrid');
  });
  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });
  $('.select-style').styler();
  $('.product-one__item-num').styler();
  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
  });
   
  $(".star").rateYo({
    rating: 3.6,
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
  });

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.querySelector('.promo__clock');
    const daysSpan = clock.querySelector('.promo__days');
    const hoursSpan = clock.querySelector('.promo__hours');
    const minutesSpan = clock.querySelector('.promo__minutes');
    const secondsSpan = clock.querySelector('.promo__seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = $('.promo__clock').attr('data-time');
  initializeClock('promo__clock', deadline);
});
