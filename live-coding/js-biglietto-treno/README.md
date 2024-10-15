# Calcolo del biglietto del treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

## definizione input / variabili utili al programma

1) definisco una variabile kmNumber - salvo il valore di un prompt all'interno della variabile;
1a) trasformo il valore di KmNumber da stringa a numero;
2) definisco una variabile userAge - salvo il valore di un prompt all'interno della variabile;
2b) trasformo il valore di userAge da stringa a numero;
3) salvo in una variabile KmPrice il prezzo al chilometro (0.21);
3a) salvo in una variabile underAge il valore che determina l'età che definisce un utente minorenne = 18;
3b) salvo in unava variabile overAge il valore che determina l'età che definisce un utente over = 65
4) salvo in una variabile underDiscount il valore dello sconto - 20; /in percentuale;
5) salvo in una variabile overDiscount il valore dello sconto - 40; /in percentuale;

## logica di calcolo prezzo biglietto

4) definisco una variabile price - salvo il valore del calcolo kmNumber * price all'interno della variabile;

5) SE utente minorenne applico condizione (userAge < underAge )
    - price - 20%
    ALTRIMENTI SE utente over 65 applico condizione (userAge > overAge)
    - price - 40%

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20 % per i minorenni
va applicato uno sconto del 40 % per gli over 65.


## ouput

n) restituisco in console / alert / dom informazione di prezzo in formato umano (price);
    - esempio risultante: (number) 90.7865472 -> 90.79


L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

Create un file README.md e provate prima a scrivere il processo per la risoluzione del problema come visto in classe.

Dopo trasformate il vostro linguaggio formale in js.
