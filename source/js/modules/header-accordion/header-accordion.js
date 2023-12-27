export class HeaderAccordion {
  constructor() {
    this._menu = document.querySelector('[data-header-accordion]');
    this._breakpointMedia = window.matchMedia('(max-width: 1199px)');

    this._itemClickHandler = this._itemClickHandler.bind(this);
    this._breakpointChecker = this._breakpointChecker.bind(this);
  }

  init() {
    if (!this._menu) {
      return;
    }

    this._breakpointMedia.addEventListener('change', this._breakpointChecker);
    this._breakpointChecker();
  }

  _itemClickHandler(evt) {
    evt.preventDefault();
    const item = evt.target.closest('[data-header-accordion-item]');

    if (item.classList.contains('is-active')) {
      item.classList.remove('is-active');
    } else {
      item.classList.add('is-active');
    }
  }

  _breakpointChecker() {
    const menuItems = document.querySelectorAll('[data-header-accordion-item]');

    if (!menuItems.length) {
      return;
    }

    if (this._breakpointMedia.matches) {
      menuItems.forEach((item) => {
        const link = item.querySelector('[data-header-accordion-link]');
        link.addEventListener('click', this._itemClickHandler);
      });
    } else {
      menuItems.forEach((item) => {
        item.removeEventListener('click', this._itemClickHandler);

        if (item.classList.contains('is-active')) {
          item.classList.remove('is-active');
        }
      });
    }
  }
}
