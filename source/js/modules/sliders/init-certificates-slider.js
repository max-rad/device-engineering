const slider = document.querySelector('[data-slider="certificates"]');
const breakpointMedia = window.matchMedia('(max-width: 767px)');

let swiper;

const breakpointChecker = () => {
  if (breakpointMedia.matches) {
    initSwiper();
  } else {
    if (swiper) {
      swiper.destroy();
    }
  }
};

const initSwiper = () => {
  swiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 12,
  });
};

const initCertificatesSlider = () => {
  if (!slider) {
    return;
  }

  breakpointMedia.addEventListener('change', breakpointChecker);
  breakpointChecker();
};

export {initCertificatesSlider};
