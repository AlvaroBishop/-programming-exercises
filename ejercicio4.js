/*
    Dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres, sin usar metodos propios del lenguaje, solo estructuras de control
*/


const reverseString = text => {
    let reversedText = '';

    for (let letter of text) {
        reversedText = letter + reversedText;
    }

    return reversedText
}

console.log(reverseString('reversa'));