const alunos = [
  { nome: 'João', nota: 7.9},
  { nome: 'Maria', nota: 9.2}
]

// Imperativo
console.time('1')
let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota;
}
console.log(total1 / alunos.length)
console.timeEnd('1')

// Declarativo
console.time('2')

const getNota = aluno => aluno.nota;
const soma = (acc, i) => acc + i;

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)
console.timeEnd('2')

