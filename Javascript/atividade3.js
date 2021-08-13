// CELSIUS EM FAHRENHEIT

/* Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

C = (F - 32) * 5/9

F = C * 9/5 + 32 */




/* 
function fahrenheit(F) {
    let C = 50
    F = C * 9/5 + 32

    return F
}

console.log(fahrenheit() + '°F')

function celsius(C) {
    let F = 150
    const total = C = (F- 32) * 5/9
    return C
}


console.log(`${celsius()} °C`) */

// tranformDegree ('50F')

function tranformDegree(degree) {
    const celsiusExist = degree.toUpperCase().includes('C')
    const fahrenheitExist = degree.toUpperCase().includes('F')

    if (!celsiusExist && !fahrenheitExist) {
        throw new Error('Grau não identificado')
    }

    // fluxo ideal, F => C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5 / 9
    let degreeSign = 'C'



    //fluxo alternativo
    if(celsiusExist) {
    updatedDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = celsius => celsius * 9/5 + 32
     degreeSign = 'F'

    }



    return formula(updatedDegree) + degreeSign

}




try {
    console.log(tranformDegree('10C'))
    console.log(tranformDegree('50F'))
    /* tranformDegree('50C') */
} catch (error) {
    console.log(error.message)
}