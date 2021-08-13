/* ### Sistema de gastos familiar



Crie um objeto que possuira 2 proriedades, ambas do tipo array:

* receitas : []
* despesas : []

Agora, crie uma função que ira calcular o total de receitas e despesas e ira mostrar uma mensagem se a familia esta com saldo positivo ou negativo, seguido do valor do saldo */


let family = {
    incomes: [1200, 3200, 250, 360.42],
    expenses: [320, 1280.5, 200, 1450.00, 2000,]
}

function sum(array) {
    let total = 0;
    for(let value of array) {
        total += value
    }

    return total

}


function calculateBalance() {
    const calculateIncomes = sum (family.incomes)
    const calculateExpenses = sum (family.expenses)

    const total = calculateIncomes - calculateExpenses
    const itsOK = total >= 0
    let balanceText = "negativo"

    if (itsOK) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)} R$`)
}

calculateBalance()