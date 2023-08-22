const produtos = [
  { nome: 'Notebook', preco: 2488, fragil: true},
  { nome: 'iPad Pro', preco: 4200, fragil: true},
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
  { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]
console.time("filter");
console.log(produtos.filter((p) => p.preco > 500 && p.fragil))
console.timeEnd("filter");


const isExpensive = (p) => p.preco > 500
const isFragile = (p) => !!p.fragil

console.time("filter2");
console.log(produtos.filter((p) => isExpensive(p) && isFragile(p)))
console.timeEnd("filter2");

console.time("filter3");
console.log(produtos.filter(isExpensive).filter(isFragile))
console.timeEnd("filter3");