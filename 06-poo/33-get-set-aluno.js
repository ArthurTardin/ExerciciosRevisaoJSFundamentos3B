// EXERCÍCIO 33 - GETTERS E SETTERS
// Crie uma classe Aluno com o campo privado #nota.
// Crie get nota e set nota. O setter deve aceitar somente valores entre 0 e 10.
// Crie um aluno, altere sua nota e mostre o resultado.
//
// Escreva sua solução abaixo:

class Aluno {
    #nota;

    get nota() {
        return this.#nota;
    }

    set nota(novaNota) {
        if (novaNota >= 0 && novaNota <= 10) {
            this.#nota = novaNota;
        } else {
            console.log("Erro: A nota deve estar entre 0 e 10.");
        }
    }
}

const aluno = new Aluno();

aluno.nota = 8.5; 

console.log(`A nota do aluno é: ${aluno.nota}`); 

aluno.nota = 12; 