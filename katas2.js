// comece a criar a sua função add na linha abaixo
function add(num1, num2){
    return num1 + num2
}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(num1, num2){
    if(num1 === 0 || num2 === 0){
        return 0
    }
    let amount
    let negative
    if(num2 > 0){                                           // 1st - num2 is positive.
        amount = 0
        for(let i = 1; i <= num2; i++){
            amount = add(amount, num1)
        }
        return amount
    } else if (num2 < 0){                                   // 2nd - num2 is negative.
        amount = 0
        negative = 0
        for(let i = -1; i >= num2; i--){
            amount = add(amount, num1)
        }
        if(amount > 0){
            for(let i = 1; i <= amount; i++){               // Multiply by -1.
                negative = add(negative, -1)
            }
        } else if(amount < 0){
            for(let i = -1; i >= amount; i--){              // Multiply by -1.
                negative = add(negative, 1)
            }
        }
        return negative
    }
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(base, exp){
    
    if(exp === 0){ // 1st - the power is iqual to zero.
        return 1
    } else if(base === 0){ // 2nd - base is iquals to zero since the power is different.
        return 0
    } else{
        let final = base
        for(let i = 2; i <= exp; i++){ // As the variable final was defined as one the for has to be from two to exp.
            final = multiply(final, base) // Using the multiply function exp times.
        }
        return final
    }
}

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(num){
    if(num === 0){ // 1st by definition,factorial of zero iquals one.
        return 1
    }
    let final = 1 //  2nd factorial of one.
    for(num; num >= 1; num--){ // If num is different than one ...
        final = multiply(final, num) // Do the multiply function.
    }
    return final
}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');

/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(position){
    let num1 = 0 // Zero position. (Versions that includes the zero.)
    let num2 = 1 // First position.
    if(position === 0){
        return num1
    } else if(position > 0){
        for(let i = 0; i < position; i++){ // For that will creat the next postions.
            let num3 = add(num1, num2) // Next postition.
            num1 = num2 // New first postion is the last second position.
            num2 = num3 // New second position is the next postion.
        }
        return num1
    }
}

// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
