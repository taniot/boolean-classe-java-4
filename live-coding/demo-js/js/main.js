//qui va il codice javascript

/*
  prova
  commento
  su piu
  righe
  */

//codice di programmazione js

//metodo per scrivere nel document fortemente scoraggiato
//document.writeln("Benvenuti alla lezione su JS");

//alert
// window.alert("benvenuti alla lezione su js");

//manipolazione del dom => document object model

// document.getElementById('mio_id').innerHTML = 'Benvenuti alla lezione su JS';

// document.getElementById('mio_id'); //=> null

// console.log("ma quindi dove visualizzerò questo testo?");
// console.log(document.getElementById('mio_id'));
// document.getElementById('mio_id').innerHTML = 'Benvenuti alla lezione su JS';

//null.innerHTML //errore

// getelementbyid
// getElementById

// camelCase
// PascalCase
// kebab-case
// snack_case

console.log('sono il file main');

//dichiarazione + assegnazione = inizializzazione
// const nomeVariabile = 'Benvenuti alla lezione su js';
let fistName = 'Nome Alternativo';

let lastName;
lastName = 'Frascolla';

//numero che rappresenta i bicchieri d'acqua bevuti oggi
let glassesDrinkedToday = 1;


console.log(fistName);

//1000 loc

console.log(fistName);

// document.getElementById('mio_id').innerHTML = 'Gaetano';
// document.getElementById('mio_id').innerHTML = 'Davide';
// document.getElementById('mio_id').innerHTML = 'Massimo';
// document.getElementById('mio_id').innerHTML = 'Francesco';
// document.getElementById('mio_id').innerHTML = 'Paolo';
// document.getElementById('mio_id').innerHTML = 'Lucrezia';

let elementMyID = document.getElementById('mio_id');

console.log(elementMyID);

elementMyID.innerHTML = 'Paolo'
elementMyID.innerHTML = 'Iaroslava';
elementMyID.innerHTML = 'Giovanni';

//let mi consente di riassegnare un valore
let characterName = 'Pippo';
console.log(characterName);
characterName = 'Pluto';
console.log(characterName);
characterName = 'Paperino';
console.log(characterName);

let miaStringa;
console.log(miaStringa);


// dichiarazione variabile
let miaStringaDemo;

// assegnazione
miaStringaDemo = 'ciao';

// // utilizzo/richiamo
console.log(miaStringaDemo);

// assegnazione
miaStringaDemo = 'arrivederci';

// utilizzo/richiamo
console.log(miaStringaDemo);


// const myDemoConst = 'Prova';

// myDemoConst = 'Prova 2';


// const myFirstName = 'Gaetano';

// const varName;


// console.log(varLet);
// let varLet = 'prova';


console.log('sono arrivato qui');

const demoDemo = 'test';

console.log(demoDemo);



console.log(variable);
var variable = 10; //numerico
variable = 'pippo';

//pippo


// var nomeVariabile = 'variabile var';

let prova = false;
prova = 'ciao';


console.log(prova);



//stringhe

let myFirstName = 'Gaetano';
let myLastName = 'Frascolla';
let myAge = "41";

let userInfo = myFirstName +
  ' ' + myLastName + ' prova ' + ' prova2 ' + myAge;

let userInfoTemplateLiteral = `
${myFirstName} 
testo di 
prova 
${myLastName} 
${myAge}`;

console.log(userInfo);
console.log(userInfoTemplateLiteral);

// let num1 = 10;
// let num2 = 10;

// let sum = num1 + num2;

// console.log(sum);


let somma = 4 + 4;
console.log(somma);

let sottr = somma - 3;
console.log(sottr);

const myExpression = 'pippo' + 'pluto'; //espressione

console.log(myExpression);

const myDemoValue = 'ciao';
console.log(myDemoValue.length); //stampa la lunghezza della stringa
console.log(myDemoValue.toLocaleUpperCase()); //stampa la stringa tutta in maiuscolo

// const result = 'PIPPO'.toLowerCase();
// console.log(result);