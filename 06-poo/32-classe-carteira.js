// EXERCÍCIO 32 - ENCAPSULAMENTO
// Crie uma classe CarteiraDigital com o campo privado #saldo.
// Crie os métodos adicionarCredito(valor), realizarPagamento(valor) e consultarSaldo().
// Não permita pagamentos maiores que o saldo disponível.
//
// Escreva sua solução abaixo:

class CarteiraDigital {
    #saldo;

    constructor() {
        this.#saldo = 0;
    }

    adicionarCredito(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            return this.#saldo;
        } else {
            return "Valor inválido";
        }
    }

    realizarPagamento(valor) {
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
            return this.#saldo;
        } else {
            return "Valor inválido";
        }
    }

    consultarSaldo() {
        return this.#saldo;
    }
}

const minhaCarteira = new CarteiraDigital();
minhaCarteira.adicionarCredito(100);
minhaCarteira.realizarPagamento(40);
console.log(minhaCarteira.consultarSaldo());