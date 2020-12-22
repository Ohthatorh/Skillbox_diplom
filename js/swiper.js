var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    pagination: {
      el: '.swiper-pagination',
    },
    loop: true,
    breakpoints: {
      1025: {
        slidesPerView: 3,
      },
  
      686: {
        slidesPerView: 2,
      },
  
      320: {
        slidesPerView: 1,
      }
    }
});