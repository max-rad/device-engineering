const slider = document.querySelector('[data-slider="equipment"]');

const initEquipmentSlider = () => {
  if (!slider) {
    return;
  }

  const swiper = new Swiper(slider, {
    slidesPerView: 'auto',
    spaceBetween: 12,
    freeMode: true,
    breakpoints: {
      320: {
        spaceBetween: 12,
      },
      767: {
        spaceBetween: 20,
      },
      1023: {
        spaceBetween: 40,
      },
    },
  });
};

export {initEquipmentSlider};
