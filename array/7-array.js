// indexOf: Retorna o primeiro índice em que um elemento pode ser encontrado no array
const arr = [1, 3, 3, 4, 3]

const firstIndexOfItem = arr.indexOf(3)

console.log('firstIndexOfItem =', firstIndexOfItem)

// lastIndexOf: Retorna o último índice em que um elemento pode ser encontrado no array
const lastIndexOfItem = arr.lastIndexOf(3)
console.log('lastIndexOfItem =', lastIndexOfItem)

// includes: Retorna um booleano verificando se determinado elemento existe no array
const hasItemOne = arr.includes(1)
const hasItemTwo = arr.includes(2)

console.log('hasItemOne =', hasItemOne)
console.log('hasItemTwo =', hasItemTwo)

// some: Retorna um booleano verificando se pelo menos um item de um array satisfaz a condição
const hasSomeEvenNumber = arr.some(value => value % 2 === 0)
console.log('hasSomeEvenNumber =', hasSomeEvenNumber)

// every: Retorna um booleano verificando se todos os itens de um array satisfazem a condição
const allEvenNumbers = arr.every(value => value % 2 === 0)
console.log('allEvenNumbers =', allEvenNumbers)