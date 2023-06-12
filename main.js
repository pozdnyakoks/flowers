import './style.css'
import switcher from './src/assets/js/switcher'

// document.getElementById('app').insertAdjacentHTML('beforeend', switcher())

const feedback = document.getElementById('feedback');
const openFeedback = document.getElementById('openFeedback');
const closeFeedback = document.getElementById('closeFeedback');

const backCall = document.getElementById('backCall');
const closeBackCall = document.getElementById('closeBackCall');
const openBackCall = document.getElementById('openBackCall');


openFeedback.addEventListener('click', showFeedbackForm);
closeFeedback.addEventListener('click', hideFeedbackForm);

function showFeedbackForm() {
  feedback.classList.add('visible');
  document.body.classList.add('overflow')
}
function hideFeedbackForm() {
  feedback.classList.remove('visible');
  document.body.classList.remove('overflow')
}

function showBackCallForm() {
  backCall.classList.add('visible');
  document.body.classList.add('overflow')
}
function hideBackCallForm() {
  backCall.classList.remove('visible');
  document.body.classList.remove('overflow')
}

openBackCall.addEventListener('click', showBackCallForm);
closeBackCall.addEventListener('click', hideBackCallForm);

// ymaps.ready(init);
// function init() {
//   const myMap = new ymaps.Map("map", {
//     center: [55.785250, 37.560404],
//     zoom: 14,
//   });
//   const myPlacemark = new ymaps.Placemark(
//     [55.785250, 37.560404]);

//   myMap.geoObjects
//     .add(myPlacemark)

// }





