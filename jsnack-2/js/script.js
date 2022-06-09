// Chiedi un numero di 4 cifre all’utente nel prompt
//  e calcola la somma di tutte le cifre che compongono il numero.


const userNumber = prompt('Dimmi 4 cifre ');

// 1234
// poarto da 0 e aggiungo ogni singolo numero dato dall'utente 
let sommaNumber = 0;

for( let i = 0; i < userNumber.length; i++ ){
   let singleNumber = parseInt(userNumber[i]);

   sommaNumber += singleNumber;

   
}

console.log(sommaNumber)