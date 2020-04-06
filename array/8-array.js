// sort: Ordena os elementos do array de acordo com uma condição
const arr = [2, 6, 3, 1, 8]

const sorted = arr.sort()

console.log('sorted:', sorted)

// reverse: Inverte o sentido do array
const reverted = arr.reverse()

console.log('reverted:', reverted)

// join: Junta todos os elementos de um array, separados por um delimitador e retorna uma string
const joined = arr.join('-')

console.log('joined:', joined)

// reduce: Retorna um novo tipo de dado iterando cada posição de um array
const total = arr.reduce((total, value) => total += value, 0) // o param "total" é o que vai ser retornado, o param 0 é o inicializador do "total" e ao mesmo tempo indica o tipo de dado

console.log('total:', total)