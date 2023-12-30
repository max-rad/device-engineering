const initGallery = () => {
  const image = document.querySelector('[data-gallery-image]');

  if (!image) {
    return;
  }

  document.addEventListener('click', (evt) => {
    const target = evt.target;

    if (!target.closest('[data-gallery-src]')) {
      return;
    }

    evt.preventDefault();

    const src = target.closest('[data-gallery-src]').dataset.gallerySrc;

    image.src = src;
  });
};

export {initGallery};
