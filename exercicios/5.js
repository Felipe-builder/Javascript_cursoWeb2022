/**
 * Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
 * 
 * Exemplos:
 * maiorOuIgual(0, 0) // retornará true 
 * maiorOuIgual(0, "0") // retornará false 
 * maiorOuIgual(5, 1) // retornará false
 */

const biggerOrEqual = (x, y) => {
  return x >= y
}

console.log(biggerOrEqual(0, 0))
console.log(biggerOrEqual(0, '0'))
console.log(biggerOrEqual(5, 1))
console.log(biggerOrEqual(5, 11))