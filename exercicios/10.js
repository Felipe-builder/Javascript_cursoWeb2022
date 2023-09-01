/**
 * Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na quantidade 
 * especificada no parâmetro.
 * Exemplos:
 * simboloMais(2) // retornará "++" 
 * simboloMais(4) // retornará "++++"
 */

const simboloMais = (repeticoes) => {
  let string = "";
  for (let i = 0; i < repeticoes; i++) {
    string += '+'
  }
  return string
}

console.log(simboloMais(2))
console.log(simboloMais(4))