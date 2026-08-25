// EXERCÍCIO 20 - FILTRANDO OBJETOS
// Crie um array com cinco funcionários contendo nome e salario.
// Utilize filter() para selecionar funcionários com salário acima de R$ 3.000.
// Mostre o novo array.
//
// Escreva sua solução abaixo:

const funcionários = [
    {"nome": 'Carlos', "salário": 1800},
    {"nome": 'João', "salário": 2000},
    {"nome": 'Pedro', "salário": 10000},
    {"nome": 'Antônio', "salário": 7000},
    {"nome": 'Tardin', "salário": 50000000},
]

const acima = funcionários.filter((num) => num.salário > 3000);

console.log(acima);