// find: Retorna o primeiro item de um array que satisfaz a condição
const arr = [1, 2, 3, 4]

const firstItemGreaterThenTwo = arr.find(value => value > 2)
console.log('firstItemGreaterThenTwo =', firstItemGreaterThenTwo)

// findIndex: Retorna o índice do primeiro item de um array que satisfaz a condição
const firstIndexGreaterThenTwo = arr.findIndex(value => value > 2)
console.log('firstIndexGreaterThenTwo =', firstIndexGreaterThenTwo)

// filter: Retorna um novo array com todos os elementos que satisfazem a condição
const allValuesGreaterThenTwo = arr.filter(value => value > 2)
console.log('allValuesGreaterThenTwo =', allValuesGreaterThenTwo)