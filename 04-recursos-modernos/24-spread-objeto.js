// EXERCÍCIO 24 - SPREAD EM OBJETO
// Crie um objeto cliente com nome e telefone.
// Utilize Spread para criar um novo objeto que mantenha os dados
// e acrescente a propriedade fidelidade com valor "Ouro".
//
// Escreva sua solução abaixo:

const clienteOriginal = {
    nome: "Arthur",
    telefone: 999999999
};

const clienteAtualizado = {
    ...clienteOriginal,
    fidelidade: "Ouro"
};

console.log(clienteAtualizado);