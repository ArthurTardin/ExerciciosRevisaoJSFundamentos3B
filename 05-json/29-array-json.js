// EXERCÍCIO 29 - ARRAY EM JSON
// Crie um array com três objetos de tarefas contendo id, descricao e concluida.
// Converta o array para JSON e mostre o resultado.
//
// Escreva sua solução abaixo:

const tarefas = [
    {"id": 1, "descricao": 'Muito legal', "concluida": false},
    {"id": 2, "descricao": 'Muito divertido', "concluida": false},
    {"id": 3, "descricao": 'Muito ruim', "concluida": true},
];

const Converta = JSON.stringify(tarefas);

console.log(tarefas);