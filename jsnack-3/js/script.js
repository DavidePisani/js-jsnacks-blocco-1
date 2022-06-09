// - Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// Chiedere il numero al cliente 10 volte
// sommare tutte e 10 le cifre

let sommaNumber = 0;
// chiedo al cliente di inserire per 10 volte un numero nel promp
for( let i = 0; i < 10; i++){
   let userNumber = parseInt(prompt('Inserisci 10 cifre singloramente'));
   // sommo i numeri dati dall'utente
   sommaNumber += userNumber;
}
// stampo in console
console.log(sommaNumber);