// EXERCÍCIO 18 - UTILIZANDO THIS
// Crie um objeto curso com nome, modalidade e um método descrever().
// O método deve utilizar this e retornar uma frase com os dados do curso.
//
// Escreva sua solução abaixo:

class Curso{
    constructor(nome, modalidade){
        this.nome = nome;
        this.modalidade = modalidade;
    };

    Descrever(){
       return `O nome do meu curso é ${this.nome}, na modalidade ${this.modalidade}`;
    }
}

const curso = new Curso("Desenvolvimento de sistema", "TI");

console.log(curso.Descrever());