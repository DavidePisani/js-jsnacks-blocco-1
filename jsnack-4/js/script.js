// - Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// creo un arrey vuoto
let oddArrey = [];

// faccio un ciclo per far si che chiede i numeri 6 voolte all'utente
for( let i = 0; i < 6; i++){
    let userNumber = parseInt(prompt('Inserisci 6 cifre singloramente'));

    // faccio il calcolo per prendermi i numeri dispari e li inserisco nell'arrey
    if(userNumber % 2 === 1){
        oddArrey.push(userNumber)
    }  
}
// stampo in console
console.log(oddArrey);