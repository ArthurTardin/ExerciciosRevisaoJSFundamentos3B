// EXERCÍCIO 08 - FILTER - TEMPERATURAS
// Considere as temperaturas: [18, 25, 31, 16, 29, 35, 22].
// Utilize filter() para selecionar somente temperaturas acima de 25 graus.
//
// Escreva sua solução abaixo:

const temperaturas = [18, 25, 31, 16, 29, 35, 22];

const maior25 = temperaturas.filter((temp) => temp > 25);

console.log(maior25);