
/*
## definizione input / variabili utili al programma

1) definisco una variabile kmNumber - salvo il valore di un prompt all'interno della variabile;
1a) trasformo il valore di kmNumber da stringa a numero;
*/

const kmNumber = Number(prompt("Inserisci il numero di km che vuoi percorrere"));
console.log(kmNumber);

// 2) definisco una variabile userAge - salvo il valore di un prompt all'interno della variabile;
// 2b) trasformo il valore di userAge da stringa a numero;

const userAge = Number(prompt("Inserisci la tua età (anche se non è cortese)"));
console.log(userAge);

//3) salvo in una variabile KmPrice il prezzo al chilometro(0.21);
const kmPrice = 0.21;

//3a) salvo in una variabile underAge il valore che determina l'età che definisce un utente minorenne = 18;
const underAge = 18;

//3b) salvo in unava variabile overAge il valore che determina l'età che definisce un utente over = 65
const overAge = 65;

//4) salvo in una variabile underDiscount il valore dello sconto - 20; /in percentuale;
const underDiscount = 20;

//5) salvo in una variabile overDiscount il valore dello sconto - 40; /in percentuale;
const overDiscount = 40;

//## logica di calcolo prezzo biglietto

//4) definisco una variabile price - salvo il valore del calcolo kmNumber * price all'interno della variabile;
let price = kmNumber * kmPrice;


//SE utente minorenne applico condizione(userAge < underAge)

if (userAge < underAge) {
    console.log('utente minorenne - calcolo prezzo - 20%');

    price = price - ((price * underDiscount) / 100);

} else if (userAge > overAge) {
    console.log('utente over - calcolo prezzo - 40%');

    price = price - ((price * overDiscount) / 100);

}

//n) restituisco in console / alert / dom informazione di prezzo in formato umano(price);

const result = `Il prezzo calcolato è ${price.toFixed(2)}€`;

console.log(result);

alert(result);

document.getElementById('calculated-price').innerHTML = result;



