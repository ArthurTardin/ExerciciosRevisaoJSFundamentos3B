// EXERCÍCIO 31 - CLASSE E INSTÂNCIAS
// Crie uma classe Curso com constructor para nome, duracao e modalidade.
// Crie um método exibirInformacoes() e duas instâncias da classe.
// Mostre os dados dos dois cursos.
//
// Escreva sua solução abaixo:

class Curso{
    constructor(nome, duracao, modalidade){
        this.nome = nome;
        this.duracao = duracao;
        this.modalidade = modalidade;
    }

    exibirInformacoes(){
        return `${this.nome}, ${this.duracao}, ${this.modalidade}`;
    }
}

const curso1 = new Curso("Metalurgia", 2200, "não sei");
const curso2 = new Curso("ADM", 2200, "Também não sei");

console.log(curso1.exibirInformacoes());
console.log(curso2.exibirInformacoes());