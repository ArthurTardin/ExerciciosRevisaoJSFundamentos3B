// EXERCÍCIO 27 - OBJETO PARA JSON
// Crie um objeto reserva com codigo, hospede e numeroNoites.
// Converta o objeto para JSON utilizando JSON.stringify()
// e mostre o resultado.
//
// Escreva sua solução abaixo:

class Reserva{
    constructor(codigo, hospede, numeroNoites){
        this.codigo = codigo;
        this.hospede = hospede;
        this.numeroNoites = numeroNoites;
    }
}

const reserva = new Reserva(1222, "Arthur", 4)
const json = JSON.stringify(reserva);

console.log(json);