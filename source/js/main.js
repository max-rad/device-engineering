import {initAccordion} from './modules/accordion/init-accordion';
import {initCustomSelect} from './modules/custom-select/init-custom-select';
import {initHeader} from './modules/header/init-header';
import {initHeaderAccordion} from './modules/header-accordion/init-header-accordion';


window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initHeader();
    initHeaderAccordion();
    initCustomSelect();
    initAccordion();
  });
});
