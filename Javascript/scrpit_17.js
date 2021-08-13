// Manipulando Arrays

let techs = ["html","css","js"]

// adicionar um item no fim]
console.log(techs.push("nodejs"))
// adicionar no começo
techs.unshift("sql")
// remover do fim
//techs.pop()
// remover do inicio
//techs.shift()
//pegar comente alguns elementos do array
//console.log(techs.slice(1,2))
// remover 1 ou mais itens em qualquer posição do array
//techs.splice(1, 2)
// encontrar a posicao de um elemento do array
let index = techs.indexOf("nodejs")
techs.splice(index, 1)

console.log(techs)