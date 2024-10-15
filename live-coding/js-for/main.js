// console.log('ecco il messaggio');
// console.log('ecco il messaggio');
// console.log('ecco il messaggio');
// console.log('ecco il messaggio');
// console.log('ecco il messaggio');
// console.log('ecco il messaggio');
// console.log('ecco il messaggio');
// console.log('ecco il messaggio');
// console.log('ecco il messaggio');
// console.log('ecco il messaggio');
// console.log('ecco il messaggio');
// console.log('ecco il messaggio');
// console.log('ecco il messaggio');
// console.log('ecco il messaggio');
// console.log('ecco il messaggio');
// console.log('ecco il messaggio');
// console.log('ecco il messaggio');
// console.log('ecco il messaggio');
// console.log('ecco il messaggio');
// console.log('ecco il messaggio');


// let x = 0;
// console.log(x);

// x = x + 1;

// x++;

// console.log(x);

//stampo i valori da 1 a 10
for (let i = 1; i < 11; i++) {
    console.log(i);
}

console.log('---');


//stampo i valori da 10 a 1
for (let i = 10; i > 0; i--) {
    console.log(i);
}


console.log('---');


/*

i = 10;

1 iterazione
10 > 0?
//eseguo istruzioni
i-- che quindi vale 9

2 iterazione
9 > 0?
//eseguo istruzione
i-- che quindi vale 8

n-1 iterazione
1 > 0?
//eseguo istruzione 1
i--


n iterazione
0 > 0?

*/


for (let i = 2; i <= 10; i++) {

    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log('-------');





for (i = 2; i <= 10; i = i + 2) {
    console.log(i);
}


/*
i = 2


1 iterazione
i > 10?
false




*/



console.log('----');


const startValue = 0;
const endValue = 10;

// for (let i = startValue; i < endValue; i++) {
//     console.log(i);
// }


// let i = 0;

// for (; ;) {
//     if (i > 10) break;
//     i++;
// }


// console.log('ciclo ambiguo');

// for (let i = 0; i < 10; i++) {
//     if (i === 6) { //0,1,2,3,4,5
//         break;
//     }

//     console.log(i);
//     //incremento
// }


// let test = 10;

// for (let i = 0; i < 10; i++) {

//     test = test + i; //0 => 10
//     let prova = 2;


// }

// const result = test + prova;

// console.log(result);

// let test = 1;

// {
//     console.log('sono qui');
//     let test = 1;
//     test++;
// }

// console.log(test);

//
// let gaetano = 1;
let gaetano = 0;
//scope globale
if (true) { //blocco 1

    if (true) { //blocco 2
        gaetano = 2;
    }
}

console.log(gaetano);










