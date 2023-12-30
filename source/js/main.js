import {initAccordion} from './modules/accordion/init-accordion';
import {initCustomSelect} from './modules/custom-select/init-custom-select';
import {initHeader} from './modules/header/init-header';
import {initHeaderAccordion} from './modules/header-accordion/init-header-accordion';
import {initCertificatesSlider} from './modules/sliders/init-certificates-slider';
import {initPhoneMask} from './modules/phone-mask';
import {initPhoneValidation} from './modules/init-phone-validation';
import {initEquipmentSlider} from './modules/sliders/init-equipment-slider';
import {initCompletedProjectsSlider} from './modules/sliders/init-completed-projects-slider';
import {initModals} from './modules/modal/init-modals';
import {initGallery} from './modules/init-gallery';


window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initHeader();
    initHeaderAccordion();
    initModals();
    initCustomSelect();
    initAccordion();
    initCertificatesSlider();
    initEquipmentSlider();
    initCompletedProjectsSlider();
    initPhoneMask();
    initPhoneValidation();
    initGallery();
  });
});
