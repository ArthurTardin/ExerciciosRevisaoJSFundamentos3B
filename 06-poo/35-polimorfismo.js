// EXERCÍCIO 35 - POLIMORFISMO
// Crie uma classe Pagamento com o método processar().
// Crie as classes Pix e Cartao herdando de Pagamento.
// Sobrescreva processar() em cada classe com uma mensagem diferente.
// Coloque as formas de pagamento em um array e execute o método de cada uma.
//
// Escreva sua solução abaixo:

class Pagamento {
    processar() {}
}

class Pix extends Pagamento {
    processar() {
        return "Pagamento com pix";
    }
}

class Cartao extends Pagamento {
    processar() {
        return "Pagamento com cartão";
    }
}


function executarPagamento(sistemaDePagamento) {
    console.log(sistemaDePagamento.processar());
}

const pagamento1 = new Pix();
const pagamento2 = new Cartao();

executarPagamento(pagamento1);
executarPagamento(pagamento2);