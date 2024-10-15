console.log('sono collegato al file');

//salvare il campo ageUser in una variabile in modo che sia facilmente riusabile
//salvare il campo kmUser in una variabile in modo che sia facilmente riusabile


//informazioni lette dal dom
const formPriceCalculator = document.getElementById('price-calculator');
const kmUser = document.getElementById('user-km');
const ageUser = document.getElementById('user-age');
const showPrice = document.getElementById('show-price');
const generatedPrice = document.getElementById('generated-price');

const buttonStartCalculation = document.getElementById('start-calculation');
const buttonReset = document.getElementById('reset-form');



//variabili utili al calcolo del biglietto
const kmPrice = 0.21;
const underAge = 18;
const overAge = 65;
const discountUnder = 20;
const discountOver = 40;

//evento che esegue la funzione per il calcolo del prezzo biglietto al submit del form
// formPriceCalculator.addEventListener('submit', function (event) {
buttonStartCalculation.addEventListener('click', function (event) {
    // event.preventDefault();
    // console.log(event);
    // console.log('ho inviato il form');

    const kmUserValue = Number(kmUser.value);
    const ageUserValue = Number(ageUser.value);


    console.log(kmUserValue); //prompt
    console.log(ageUserValue); //prompt



    //calcolo del prezzo del biglietto
    let price = kmUserValue * kmPrice;


    if (ageUserValue < underAge) {
        console.log('sconto minorenni');
        price = price - ((price * discountUnder) / 100);


    } else if (ageUserValue >= overAge) {
        console.log('sconto over');
        price = price - ((price * discountOver) / 100);
    }


    generatedPrice.innerText = price.toFixed(2);
    showPrice.classList.remove('d-none');











})


//evento che resetta il prezzo calcolato
buttonReset.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('ho pigiato il bottone reset');
    kmUser.value = '';
    ageUser.value = '';

    generatedPrice.innerText = '';
    showPrice.classList.add('d-none');


})







/*
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/

// console.log(formPriceCalculator);
// console.log(kmUser);
// console.log(ageUser);