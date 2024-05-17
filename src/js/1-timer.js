import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import iconEr from '../img/error.svg';

const dataInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const outputData = document.querySelector('.js-timer');
let userSelectedDate = null;
startBtn.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (selectedDates[0] < new Date()) {
      return iziToast.error({
        iconUrl: iconEr,
        title: 'Error',
        titleColor: '#fff',
        color: '#fff',
        message: 'Please choose a date in the future',
        messageColor: '#fff',
        backgroundColor: 'red',
        position: 'topRight',
      });
    }
    userSelectedDate = selectedDates[0];
    startBtn.disabled = false;
  },
};

startBtn.addEventListener('click', onClickBtn);

function onClickBtn(e) {
  startBtn.disabled = true;
  dataInput.disabled = true;
  const tick = setInterval(() => {
    const currentDate = Date.now();
    const diffData = userSelectedDate - currentDate;
    const { days, hours, minutes, seconds } = convertMs(diffData);
    createMarkup({ days, hours, minutes, seconds });
    if (diffData < 1000) {
      clearInterval(tick);
    }
  }, 1000);
}

function createMarkup({ days, hours, minutes, seconds }) {
  outputData.querySelector('[data-days]').textContent = addLeadingZero(days);
  outputData.querySelector('[data-hours]').textContent = addLeadingZero(hours);
  outputData.querySelector('[data-minutes]').textContent =
    addLeadingZero(minutes);
  outputData.querySelector('[data-seconds]').textContent =
    addLeadingZero(seconds);
}

flatpickr(dataInput, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
