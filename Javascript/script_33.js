// throw - disparar 

function sayMyName(name = '') {
    if (name === '') {
    throw 'Nome é obrigatório'
}

console.log (name)
}




// try...catch - tentar / pegar

try {
 sayMyName('Gustavo') // irá tentar pegar o erro 


} catch(e) { //guarda o erro 
    console.log(e)
}
console.log('apos a funcao de error')