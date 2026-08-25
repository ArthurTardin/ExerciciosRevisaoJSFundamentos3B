// EXERCÍCIO 34 - HERANÇA E SUPER
// Crie uma classe Produto com nome, preço e um método exibirDados().
// Crie a classe ProdutoDigital que herde de Produto e receba também o tamanhoArquivo.
// Utilize super() no constructor e sobrescreva exibirDados() incluindo o tamanho.
//
// Escreva sua solução abaixo:

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    exibirDados() {
        return `${this.nome}, ${this.preco}`;
    }
}

class ProdutosDigitais extends Produto {
    constructor(nome, preco, tamanho) {
        super(nome, preco);
        this.tamanho = tamanho;
    }

    exibirDados() {
        return `${this.nome}, ${this.preco}, ${this.tamanho}`;
    }
}

const cursoCompleto = new Produto("Curso Avançado de JS", 150);
console.log(cursoCompleto.exibirDados()); 

const ebooK = new ProdutosDigitais("Livro de Node.js", 45, "12MB");
console.log(ebooK.exibirDados());