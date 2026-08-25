// EXERCÍCIO 19 - ARRAY DE OBJETOS
// Crie um array com três objetos de jogos.
// Cada jogo deve possuir titulo, plataforma e classificacao.
// Percorra o array e mostre o título e a plataforma de cada jogo.
//
// Escreva sua solução abaixo:

const conjunto = [
    {"titulo": 'God of War', "plataforma": 'PS2', "classificacao": 18},
    {"titulo": 'Resident Evil', "plataforma": 'PS2', "classificacao": 18},
    {"titulo": 'Valorant', "plataforma": 'PC', "classificacao": 16},
    {"titulo": 'Cities Skyline', "plataforma": 'PC', "classificacao": 12},
];

const Percorra = conjunto.forEach((a) => console.log(`Nome do jogo: ${a.titulo}, plataforma: ${a.plataforma}, classificação: ${a.classificacao}`));
