/*
    dado un numero, devolver su tabla de multiplicar completo
*/

const tablaMultiplicar = (num) => {
    let resultado = `# Tabla del ${num} #`
    console.log();
    for(let i = 1; i <= 10; i++)
    {
        resultado += `\n${i} x ${num} = ${i*num}`
    }

    return resultado;
}

console.table(tablaMultiplicar(9));