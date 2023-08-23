Array.prototype.reduce2 = function (cb, initialValue) {
  const initialIndex = initialValue ? 0 : 1;
  let acc = initialValue || this[0];
  for (let i = initialIndex; i < this.length; i++) {
    acc = cb(acc, this[i], i, this)    
  }
  return acc
}

const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: false },
]

console.time('1')
const resultado = alunos.map(a => a.nota).reduce2((acc, atual) => {
  return acc + atual
}, 10)
console.log(resultado)
console.timeEnd('1')


const arrayBolsistas = alunos.map(el => el.bolsista)
console.time('2')
const resultIsBolsista = arrayBolsistas.reduce2((acc, i) => {
  return acc && i
}, false)
console.log(resultIsBolsista)
console.timeEnd('2')

console.time('3')
const resultIsBolsista1 = arrayBolsistas.reduce2((acc, i) => {
  return acc || i
}, false)
console.log(resultIsBolsista1)
console.timeEnd('3')