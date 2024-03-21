// reviews section
var swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    breakpoints: {
      // when window width is >= 0px
      0: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      850: {
        slidesPerView: 2,
      },
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
      bulletPerSlide: true,
    },
  });
  