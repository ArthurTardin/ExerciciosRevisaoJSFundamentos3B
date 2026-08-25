// EXERCÍCIO 02 - VERIFICAR FRETE GRÁTIS
// Crie uma função que receba o valor de uma compra e retorne
// "Frete grátis" quando o valor for maior ou igual a R$ 150
// e "Frete pago" nos demais casos.
//
// Escreva sua solução abaixo:

function verificarFreteGratis(valorCompra){
    if (valorCompra >= 150){
        return "Frete grátis"
    }else{
        return "Frete pago"
    }
}

console.log(verificarFreteGratis(150));