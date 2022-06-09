// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e
// in verde i numeri pari.




const evenOddNumbers = [ 1 ,2, 3, 4, 5, 6, 7, 8, 9];

for(let i = 0; i < evenOddNumbers.length; i++) {
    const thisNumber = evenOddNumbers[i];


    if(thisNumber % 2 !== 0) {
        document.getElementById('txt-red').innerHTML +=thisNumber + ' ';
    } else{
        document.getElementById('txt-green').innerHTML += thisNumber + ' ';
    }
}