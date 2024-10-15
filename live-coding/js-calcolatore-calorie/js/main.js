//prendere il form dal dom

const myForm = document.getElementById('calculator-form');

//campi del form
const userAge = document.getElementById('user-age');
const userKm = document.getElementById('user-km');
const userActivity = document.getElementById('user-activity');
const resultContainer = document.querySelector('#result-container');
const resultText = resultContainer.querySelector('h3');

//quando invio il form, leggo i dati inseriti dall'utente

myForm.addEventListener('submit', function (event) {
  event.preventDefault();

  console.log('prova invio form');

  console.log('age: ', userAge.value);
  console.log('km', userKm.value);
  console.log('activity', userActivity.value);

  //uguale a prima

  //calcolo delle calorie

  //quando ho finito operazioni
  userAge.value = '';
  userKm.value = '';
  userActivity.value = '';

  resultText.innerHTML = 'Il calcolo delle calorie è completato';
  resultContainer.classList.remove('d-none');
});

//in funzione dei dati, calcolo le calorie
