// EXERCÍCIO 30 - SIMULANDO RESPOSTA DE API
// Crie um objeto resposta com as propriedades status, quantidade e clientes.
// A propriedade clientes deve conter um array com dois objetos.
// Converta a resposta para JSON e depois novamente para objeto.
// Mostre o status e os clientes recebidos.
//
// Escreva sua solução abaixo:

const resposta = {
    status: "Sucesso",
    quantidade: 2,
    clientes: [
        { nome: "Arthur", id: 1 },
        { nome: "Carlos", id: 2 }
    ]
};

const respostaJSON = JSON.stringify(resposta);

const respostaObjeto = JSON.parse(respostaJSON);

console.log("Status:", respostaObjeto.status);
console.log("Clientes:", respostaObjeto.clientes);