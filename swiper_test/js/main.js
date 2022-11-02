'use strict';

const swiperClients1 = new Swiper('.v-clients-slider', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 0,
    //disableOnInteraction: false
  },
  speed: 10500,
  spaceBetween: 10,
  slidesPerView: 5, 
  grabCursor: false,
  slidesPerGroup: 20,
  //simulateTouch: false,
});

const swiperClients2 = new Swiper('.v2-clients-slider', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 0,
    //disableOnInteraction: false
  },
  speed: 10500,
  spaceBetween: 10,
  slidesPerView: 6.5, 
  grabCursor: false,
  slidesPerGroup: 20,
  //simulateTouch: false,
});