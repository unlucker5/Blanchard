let swiper3 = new Swiper(".swiper3", {
    grid: {
        rows: 1,
        fill: "row"
      },
      pagination: {
        el: ".test-pagination",
        type: "fraction"
      },

      navigation: {
        nextEl: ".projects__swiper-btn-next",
        prevEl: ".projects__swiper-btn-prev"
      },

      breakpoints: {
        767: {
          slidesPerView: 1,
          slidesPerGroup:1
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 33,
          slidesPerGroup:2
        },

        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
          slidesPerGroup:2
        },

        1800: {
          slidesPerView: 3,
          spaceBetween: 49,
          slidesPerGroup:3
        }
      },

      a11y: false,
      keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

      // // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
      // watchSlidesProgress: true,
      // watchSlidesVisibility: true,
      // slideVisibleClass: 'slide-visible',

      // on: {
      //   init: function () {
      //     this.slides.forEach(slide => {
      //       if (!slide.classList.contains('slide-visible')) {
      //         slide.tabIndex = '-1';
      //       } else {
      //         slide.tabIndex = '';
      //       }
      //     });
      //   },
      //   slideChange: function () {
      //     this.slides.forEach(slide => {
      //       if (!slide.classList.contains('slide-visible')) {
      //         slide.tabIndex = '-1';
      //       } else {
      //         slide.tabIndex = '';
      //       }
      //     });
      //   }
      // }

      // on: {
      //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
      //   beforeResize: function () {
      //     this.slides.forEach((el) => {
      //       el.style.marginTop = "";
      //     });
      //   }
      // }
    });
