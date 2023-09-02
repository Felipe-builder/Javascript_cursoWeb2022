/**
 * Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, 
 * enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.
 * 
 * Exemplos:
 * repetir("código", 2) // retornará ["código", "código"] 
 * repetir(7, 3) // retornará [7, 7, 7]
 */

const repetir = (valor, repeticoes) => {
  let produto = [];
  for (let i = 0; i < repeticoes; i++) {
    produto.push(valor);
  }
  return produto
}

const repetir2 = (valor, repeticoes) => {
  return Array(repeticoes).fill(valor)
}

console.log(repetir("código", 2))
console.log(repetir(7, 3))

console.log(repetir2("código", 2))
console.log(repetir2(7, 3))
