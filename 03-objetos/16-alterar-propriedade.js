// EXERCÍCIO 16 - ALTERANDO PROPRIEDADE
// Crie um objeto ingresso com evento, preco e quantidade.
// Altere o preço e aumente a quantidade em duas unidades.
// Mostre o objeto antes e depois das alterações.
//
// Escreva sua solução abaixo:

class Ingresso{
    constructor(evento, preco, quantidade){
        this.evento = evento;
        this.preco = preco;
        this.quantidade = quantidade;
    };
}

const ingresso = new Ingresso("Tupis vs the classics", 150, 1);
console.log(ingresso);

ingresso.preco = 300;
ingresso.quantidade = 2;

console.log(ingresso);
