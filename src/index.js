import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import forms from './modules/forms';
import tabs from './modules/tabs';
import slider from './modules/slider';
import sliderCarousel from './modules/sliderCarousel';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
timer('25 september 2024');
menu();
modal();
forms();
tabs();
slider();
sliderCarousel();
calc(100);
sendForm({
  formId: 'form1',
  someElem: [
    {
      type: 'block',
      id: 'total',
    },
  ],
});
sendForm({
  formId: 'form2',
  someElem: [
    {
      type: 'block',
      id: 'total',
    },
  ],
});
sendForm({
  formId: 'form3',
  someElem: [
    {
      type: 'block',
      id: 'total',
    },
  ],
});
