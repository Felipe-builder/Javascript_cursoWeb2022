/**
 * Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e
 * com ponto de exclamação "!" no final.
 * Exemplos:
 * cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
 * cumprimentar("Maria") // retornará "Olá, Maria!"
 * 
 */


//
const cumprimentar = (str) => {
  return `Olá, ${str}!`
}

const cumprimento1 = cumprimentar('Leonardo')
const cumprimento2 = cumprimentar('Maria')

console.log(cumprimento1)
console.log(cumprimento2)