// console.log('sono correttamente collegato alla pagina');



//la condizione è un'espressione che DEVE restituirci SEMPRE un valore VERO o FALSO;
//condizione => valore booleano => true/false

// console.log('Questo codice viene eseguito PRIMA di istruzione condizionale');

// const x = 10;
// const y = 3;



// if (x == 5) {
//     //codice che viene eseguito;

//     // console.log('sono nella condizione');
//     // console.log('questa è una nuova stampa');

//     // const newVariable = 1;

//     // console.log(newVariable);

//     console.log('CASO IF: codice eseguito nelle prime graffe');
//     console.log('x è uguale a 5');

// } else {
//     console.log('CASO ELSE: codice che viene eseguito come alternativa');
//     console.log('x è diverso da 5');
// }



// if (x == 1) {
//     console.log('x è uguale a 1');
// } else if (x == 2) {
//     console.log('x è uguale a 2');
// } else if (x == 3) {
//     console.log('x è uguale a 3');
// } else if (x == 4) {
//     console.log('x è uguale a 4');
// } else if (x == 5) {
//     console.log('x è uguale a 5');
// } else if (x == 6) {
//     console.log('x è uguale a 6');
// } else if (x == 7) {
//     console.log('x è uguale a 7');
// } else if (x == 8) {
//     console.log('x è uguale a 8');
// } else {
//     console.log('x non è 5 e non è 10');
//     console.log(x);
// }



// console.log('Questo codice viene eseguito DOPO istruzione condizionale');



// if (x === 5 && y === 4) { // true && false =>  false
//     console.log('x è uguale a 5 e y è uguale a 4');
// } else if (x === 5 || y === 4) { // true || false / false || true => true
//     console.log('almeno uno dei due valori è compatibili con la condizione');

//     if (x === 5) {
//         console.log('x vale 5');
//     }

//     if (y === 4) {
//         console.log('y vale 4');
//     }



// } else {
//     console.log("le condizioni di partenza non si è verificata");
// }




// const myValue = 5; //numero - 5

// if (!(myValue === 4)) { //true
//     console.log('Condizione 1');
// } else { //false
//     console.log('Condizione 2');
// }


/*
Inizializziamo due parole a due variabili.
Andiamo poi a verificare quale delle due parole è più lunga e stampiamo in console un messaggio appropriato.
*/
//1) inizializzo una variable word1 e le assegno una stringa;

// const word1 = 'ciaooo';
const word1 = prompt("Inserisci la prima parola");
console.log(word1);

//1a) determino la lunghezza della parola word1 - e lo salvo nella variabile word1Lenght 

const word1Lenght = word1.length;
console.log(word1Lenght);

//2) inizializzo una variabile word2 e le assegno una stringa;

//const word2 = 'prova';
const word2 = prompt("Inserisci la seconda parola");
console.log(word2);


//2a) determino la lunghezza della parola word2 - word2Lenght

const word2Lenght = word2.length;
console.log(word2Lenght);


//3) confronto la lunghezza delle parole; //va ancora un po' elaborato

/*
proposta 1

se word1Lenght è maggiore di  word2Lenght
4) stampo il messaggio dicendo che la lunghezza di word1 è maggiore della lunghezza di word2
altrimenti se word1Lenght è uguale a  word2Lenght
4) stampo il messaggio dicendo che le parole hanno la stessa lunghezza
altrimenti
4) stampo il messaggio dicendo che la lunghezza di word2 è maggiore della lunghezza di word1

*/

if (word1Lenght > word2Lenght) {
    //console.log('La parola1 è più lunga della parola 2');
    console.log(`La parola ${word1} lunga ${word1Lenght} caratteri è più lunga della parola ${word2} lunga ${word2Lenght} caratteri`);
} else if (word1Lenght === word2Lenght) {
    //console.log('La parola1 è della stessa lunghezza della parola 2');
    console.log(`La parola ${word2} lunga ${word2Lenght} caratteri è più lunga della parola ${word1} lunga ${word1Lenght} caratteri`);

} else {
    //console.log('La parola2 è più lunga della parola 1');
    console.log(`La parola ${word1} lunga ${word1Lenght} è  lunga come la parola ${word2} lunga ${word2Lenght}`);
}


/*
proposta 2

se word1Lenght è maggiore di  word2Lenght
4) stampo il messaggio dicendo che la lunghezza di word1 è maggiore della lunghezza di word2
altrimenti se word2Lenght è maggiore di   word1Lenght
4) stampo il messaggio dicendo che la lunghezza di word2 è maggiore della lunghezza di word1
altrimenti
4) stampo il messaggio dicendo che le parole hanno la stessa lunghezza

*/

if (word1Lenght > word2Lenght) {
    console.log('La parola1 è più lunga della parola 2');
} else if (word2Lenght > word1Lenght) {
    console.log('La parola2 è più lunga della parola 1');
} else {
    console.log('La parola1 è della stessa lunghezza della parola 2');
}

