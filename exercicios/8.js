/**
 * Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero)
 * e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação.
 * Exemplo:
 * 
 * Exemplos:
 * multiplicar(5, 5) // retornará 25
 * multiplicar(0, 7) // retornará 0
 */

const multiplicar = (multiplicando, multiplicador) => {
  let produto = 0;
  for (let i = 0; i < multiplicador; i++) {
    produto += multiplicando;
  }
  return produto
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))