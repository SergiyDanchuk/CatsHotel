$(function () { 

    var mySwiper = new Swiper ('#hotel-room__slider' , {
        // Optional parameters
        loop: true,
        spaceBetween: 100,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    
});