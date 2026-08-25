// EXERCÍCIO 09 - FIND - ALUNO
// Crie um array de objetos com nome e matrícula de quatro alunos.
// Utilize find() para localizar o aluno com a matrícula 103.
// Mostre o aluno encontrado.
//
// Escreva sua solução abaixo:

const alunos = [
    {nome: "Arthur", matricula: 100},
    {nome: "Carlos", matricula: 102},
    {nome: "Pablo", matricula: 103},
    {nome: "Enzo", matricula: 104},
]

const aluno = alunos.find((aluno) => aluno.matricula === 103);

console.log(aluno);