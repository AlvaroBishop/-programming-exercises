/*
    Dada una palabra, buscarla en una frase y devolver cuantas veces aparezca en ella.
    La frase y la palabra deben ser parametros de la funcion
*/

const wordCounter = (sentence, word) => {
    let counter = 0;
    let cleanSentence = sentence.toLowerCase().replace(/[!,.?-]/gi,'');
    cleanSentence.split(' ').filter( w => (w.toLowerCase() === word ) && counter++)
    return counter
}

console.log(wordCounter('Si tu gusto, no gusta del gusto que gusta mi GUSTO!', 'gusto'));
console.log(wordCounter('Si tu gusto, no gusta del gusto que gusta mi GUSTO', 'gusta'));
console.log(wordCounter('Si tu gusto no gusta del gusto que gusta mi GUSTO', 'cheems'));