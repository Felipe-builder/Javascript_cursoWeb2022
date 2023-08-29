const reverse = (value) => {
  if (typeof value === 'number') {
    return value * -1;
  }
  if ( typeof value === 'boolean') {
    return !value
  }
  if (typeof value === 'string') {
    return 'booleano ou número esperados mas o parâmetro é do tipo string'
  }
}

console.log(reverse(true))
console.log(reverse('6'))
console.log(reverse(-2000))
console.log(reverse('Programação'))