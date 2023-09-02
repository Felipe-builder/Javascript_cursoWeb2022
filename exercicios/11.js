/**
 * Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
 * 
 * Exemplos:
 * receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"] 
 * receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]
 */

const receberPrimeiroEUltimoElemento = (array) => {
  const newArray = [];
  newArray.push(array.shift());
  newArray.push(array.pop());
  return newArray
}

const receberPrimeiroEUltimoElemento2= ([fistElment, ...array]) => {
  return [fistElment, array.pop()]
}


console.log(receberPrimeiroEUltimoElemento([7,14,"olá"]))
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]))

console.log(receberPrimeiroEUltimoElemento2([7,14,"olá"]))
console.log(receberPrimeiroEUltimoElemento2([-100, "aplicativo", 16]))
