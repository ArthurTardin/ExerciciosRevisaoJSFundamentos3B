// EXERCÍCIO 14 - CRIANDO OBJETO
// Crie um objeto chamado smartphone com as propriedades marca, modelo, armazenamento e ligado.
// Mostre o objeto completo no console.
//
// Escreva sua solução abaixo:

class Smartphone{
    constructor(marca, modelo, armazenamento, ligado){
        this.marca = marca;
        this.modelo = modelo;
        this.armazenamento = armazenamento;
        this.ligado = ligado;
    };
}

const smartphone = new Smartphone("Samsung", "S24", "Não sei", true);

console.log(smartphone);