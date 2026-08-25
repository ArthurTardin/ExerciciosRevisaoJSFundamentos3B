// EXERCÍCIO 21 - DESESTRUTURAÇÃO DE OBJETO
// Crie um objeto viagem com destino, dias e valor.
// Utilize desestruturação para criar variáveis com essas propriedades.
// Mostre as variáveis no console.
//
// Escreva sua solução abaixo:

class Viagem{
    constructor(destino, dias, valor){
        this.destino = destino;
        this.dias = dias;
        this.valor = valor;
    };

}

const {destino, dias, valor} = Viagem;

console.log(destino, dias, valor);