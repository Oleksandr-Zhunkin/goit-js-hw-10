import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { createPromise } from './create-promise.js';

import iconOk from '../img/imgok.svg';
import iconEr from '../img/error.svg';
import iconCaution from '../img/caution.svg';
import iconHello from '../img/hello.svg';

const formEl = document.querySelector('form');
const inputEl = formEl.querySelector('[type="number"]');
const radioFulf = formEl.querySelector('[value="fulfilled"]');
const radioRej = formEl.querySelector('[value="rejected"]');
inputEl.removeAttribute('required');
radioFulf.removeAttribute('required');
radioRej.removeAttribute('required');

formEl.addEventListener('submit', e => {
  e.preventDefault();

  if (inputEl.value === '' || (!radioFulf.checked && !radioRej.checked)) {
    return iziToast.warning({
      title: 'Caution',
      message: 'You forgot important data',
      position: 'topRight',
      titleColor: '#fff',
      messageColor: '#fff',
      backgroundColor: '#ffa000',
      iconUrl: iconCaution,
    });
  }

  const formData = new FormData(formEl);
  const delay = formData.get('delay');
  const radioValue = formData.get('state');

  createPromise(delay, radioValue)
    .then(() => {
      iziToast.success({
        iconUrl: iconOk,
        title: 'OK',
        titleColor: '#fff',
        messageColor: '#fff',
        backgroundColor: '#59a10d',
        position: 'topRight',
        message: `✅ Fulfilled promise in ${delay}ms`,
        timeout: `${delay}`,
      });
    })
    .catch(() => {
      iziToast.error({
        iconUrl: iconEr,
        title: 'Error',
        titleColor: '#fff',
        messageColor: '#fff',
        backgroundColor: '#ef4040',
        position: 'topRight',
        message: `❌ Rejected promise in ${delay}ms`,
        timeout: `${delay}`,
      });
    });
  formEl.reset();
});

iziToast.info({
  title: 'Hello',
  message: 'Welcome!',
  titleColor: '#fff',
  messageColor: '#fff',
  backgroundColor: '#09f',
  iconUrl: iconHello,
  position: 'topRight',
  timeout: 2000,
});
