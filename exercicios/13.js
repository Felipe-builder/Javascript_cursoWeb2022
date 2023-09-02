/**
 * Crie uma função que receba um array de elementos e retorne um array somente com os números presentes 
 * no array recebido como parâmetro.
 * 
 * Exemplos:
 * 
 * filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20] 
 * filtrarNumeros(["a", "c"]) // retornará []
 */

const filtrarNumeros = (array) => {
  const numbers = [];
  for (const element of array) {
    typeof element === 'number' ? numbers.push(element) : null; 
  }
  return numbers
}

const filtrarNumeros2 = (array) => {
  return array.filter(item => typeof item === 'number')
}


console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))
console.log(filtrarNumeros(["a", "c"]))

console.log(filtrarNumeros2(["Javascript", 1, "3", "Web", 20]))
console.log(filtrarNumeros2(["a", "c"]))

