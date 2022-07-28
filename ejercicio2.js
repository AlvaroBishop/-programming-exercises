/*
    Dada una cadena de texto, comprobar si es un palindromo o no.
    los palindromos son palabras que se leen igual aun estando invertidos.
*/


function palindrome(word) {
    let inverse = word
                    .split('')
                    .reverse()
                    .join('');

    return (inverse === word);
}

console.log(palindrome("otto"))
console.log(palindrome("victor"))
console.log(palindrome("ana"))
console.log(palindrome("ojo"))
console.log(palindrome("alvaro"))
