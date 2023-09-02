/**
 * Elabore uma função que receba um array de números e retorne um array que tenha todos os números 
 * que são pares e que também tenham índices pares:
 * Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão da divisão dele por 2 é zero.
 * 
 * Exemplos:
 * 
 * receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
 * receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]
 */

const receberSomenteOsParesDeIndicesPares = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    ((i % 2 === 0) && (array[i] % 2 === 0)) ? newArray.push(array[i]) : null
  }
  return newArray
}

const receberSomenteOsParesDeIndicesPares2 = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i += 2) {
    (array[i] % 2 === 0) ? newArray.push(array[i]) : null
  }
  return newArray
}

const receberSomenteOsParesDeIndicesPares3 = (array) => {
  return array.filter((element, index) => {
    return ((index % 2 === 0) && (element % 2 === 0))
  })
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))

console.log(receberSomenteOsParesDeIndicesPares2([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares2([10, 70, 22, 43]))

console.log(receberSomenteOsParesDeIndicesPares3([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares3([10, 70, 22, 43]))
