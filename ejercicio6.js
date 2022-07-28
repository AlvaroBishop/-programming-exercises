/*
    Dibujar un cuadrado hueco con asteriscos
*/

const drawSquare = size => {
    let square = ``;

    for(let i = 0; i < size; i++)
    {
        if(i === 0 || i === size-1)
        {
            for(let j = 0; j < size; j++)
            {
                
                    square += '*'
            }
            square += '\n'
        }
        else 
        {
            for(let j = 0; j < size; j++)
            {
                
                (j === 0 || j === size-1)  ?  square += '*' : square += ' '
            }
            square += '\n'
        }
    }
    
    return square
}

console.log(drawSquare(10))


