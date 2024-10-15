// console.log('main js');

// //esempio classlist

// const paragrafoEsempio = document.getElementById('demo-p');

// //leggo tutte le classi css dell'elemento
// console.log(paragrafoEsempio.classList);
// //aggiungo una classe css all'elemento
// document.getElementById('demo-p').classList.add('pizza');
// document.getElementById('demo-p').classList.remove('test');
// //leggo tutte le classi css dell'elemento
// console.log(paragrafoEsempio.classList);

// //esempio className

// console.log(paragrafoEsempio.className);


// //esempio di innerHTML

// console.log(paragrafoEsempio.innerHTML);

// //document.getElementById('demo-p').innerHTML = "<p>paragrafo nel paragrafo</p>";
// paragrafoEsempio.innerText = "<p>paragrafo nel paragrafo</p>";
// // document.getElementById('demo-p').innerText = "testo di prova";

// console.log(paragrafoEsempio.innerHTML);

// //demo style

// console.log(document.getElementById('demo-style').style);

// document.getElementById('demo-style').style.backgroundColor = 'yellow';

// console.log(document.getElementById('demo-style').style);

// console.log(document.querySelector('#demo-style input').value);

// //addEventListener

// document.querySelector('button').addEventListener('click', function () {
//     console.log('ho pigiato bottone');

//     document.getElementById('demo-p').innerHTML = 'Qualcuno ha pigiato bottone!';
//     alert('Hai vinto il premio');

// })


const paragrafoEsempio = document.getElementById('demo-p');
console.log(paragrafoEsempio);

paragrafoEsempio.innerHTML = 'qualcosa';


paragrafoEsempio.style.fontSize = '25px';
// console.log(paragrafoEsempio);

const mySelect = document.querySelector('select');

console.log(mySelect.value);

mySelect.addEventListener('change', function () {
    console.log('il valore è cambiato');
    console.log(mySelect.value);
    console.log(typeof mySelect.value);

    const mySelectValue = Number(mySelect.value);

    console.log(mySelectValue);

    if (mySelectValue === 1) {

        console.log('valore 1');
        paragrafoEsempio.style.backgroundColor = 'red';

    } else if (mySelectValue === 2) {

        console.log('valore 2');
        paragrafoEsempio.style.backgroundColor = 'green';



    } else if (mySelectValue === 3) {

        console.log('valore 3');
        paragrafoEsempio.style.backgroundColor = 'blue';


    }



})