// EXERCÍCIO 17 - MÉTODO DE OBJETO
// Crie um objeto circulo com a propriedade raio e um método calcularArea().
// O método deve retornar Math.PI * raio * raio.
// Mostre a área com duas casas decimais.
//
// Escreva sua solução abaixo:

class Circulo{
    constructor(raio){
    this.raio = raio;
    };

    calcularArea(){
        return Math.PI * (this.raio * this.raio);
    };
}

const circulo = new Circulo(30);

console.log(circulo.calcularArea().toFixed());
