

/* Vamos fortalecer e aplicar os conhecimentos, alem de aprender truqyes e dicas para resolver os desafios e avançar para o proximo nivel */


/* Tranformar notas escolares

Crie um algoritmo que transforme as notas do sistema numerico para sistema de notas em caracteres tipo A B C

* de 90 pra cima - A
* entre 80 - 89 - B
* entre 70 - 79 - C
* entre 60 - 69 - D
* Menor que 60 - F


*/
function classificarNota(nota) {
    if (nota >= 90)
      return 'O Aluno tirou = A'
    else if (nota >= 80 && nota < 90)
      return 'O aluno tirou = B'
    else if (nota >= 70 && nota < 80)
      return 'O aluno tirou = C'
    else if (nota >= 60 && nota < 70)
      return 'O aluno tirou = D'
    else
      return 'O aluno tirou = F'
  }
  
  console.log(classificarNota(50))
  console.log(classificarNota(45))
  console.log(classificarNota(20))
  console.log(classificarNota(80))
  console.log(classificarNota(99))
  console.log(classificarNota(75))
  console.log(classificarNota(5))
  console.log(classificarNota(34))
  console.log(classificarNota(67))
