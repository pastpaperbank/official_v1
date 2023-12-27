var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });



  document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
      // Add your Swiper options here

      breakpoints: {
        // When window width is <= 767px (phone screen)
        767: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // When window width is > 767px (laptop screen)
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });



  // I tried with my java code but still not working


