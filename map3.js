Array.prototype.map2 = function(callback) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this))
  }
  return newArray
}

const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }',
]

console.time("dois-map");
const paraObj = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;
const precosCarrinho2 = carrinho.map2(paraObj).map(apenasPreco)
console.log(precosCarrinho2)
console.timeEnd("dois-map");



console.time("um-map");
const precosCarrinho1 = carrinho.map2(el => JSON.parse(el).preco)
console.log(precosCarrinho1)
console.timeEnd("um-map");

