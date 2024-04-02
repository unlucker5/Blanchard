let swiper1 = new Swiper(".swiper1", {
    grid: {
      rows: 1,
      fill: "row"
    },
    pagination: {
      el: ".test-pagination",
      type: "fraction"
    },
    loop:true ,
    navigation: {
      nextEl: ".test-next",
      prevEl: ".test-prev"
    },

    breakpoints: {
      10: {
        slidesPerView: 1 ,
        slidesPerGroup:1
      },

      751: {
        slidesPerView: 2,
        spaceBetween: 35,
        slidesPerGroup:2
      },

      1300: {
        slidesPerView: 3,
        spaceBetween: 50 ,
        slidesPerGroup:3
      },


    },

    a11y: false,
    keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: 'slide-visible',

    on: {
      init: function () {
        this.slides.forEach(slide => {
          if (!slide.classList.contains('slide-visible')) {
            slide.tabIndex = '-1';
          } else {
            slide.tabIndex = '';
          }
        });
      },
      slideChange: function () {
        this.slides.forEach(slide => {
          if (!slide.classList.contains('slide-visible')) {
            slide.tabIndex = '-1';
          } else {
            slide.tabIndex = '';
          }
        });
      }
    }

    // on: {
    //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
    //   beforeResize: function () {
    //     this.slides.forEach((el) => {
    //       el.style.marginTop = "";
    //     });
    //   }
    // }
  });
