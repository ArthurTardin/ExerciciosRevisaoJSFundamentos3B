// EXERCÍCIO 23 - SPREAD EM ARRAY
// Crie um array de convidados da família e outro de amigos.
// Utilize Spread para criar um terceiro array contendo todos os convidados.
//
// Escreva sua solução abaixo:

const convidadosdaFamilia = ["Antonio", "Eu"];
const outrosAmigos = ["Você", "Tres filhos", "Um cachorro"];

const tudo = [...convidadosdaFamilia, ...outrosAmigos];

console.log(tudo);