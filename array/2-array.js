// Adicionar um ou mais elementos no final do array
const frutas = ['melancia', 'banana']
let arrLength = frutas.push('laranja')

console.log('1) frutas:', frutas)
console.log('1) quantidade:', arrLength)

// Remover o último elemento do array
let elementoRemovido = frutas.pop()
console.log('2) elemento removido:', elementoRemovido)
console.log('2) frutas:', frutas)

// Adicionar elemento no início do array
arrLength = frutas.unshift('abacate')
console.log('3) frutas:', frutas)
console.log('3) quantidade:', arrLength)

// Remover o primeiro elemento do array
elementoRemovido = frutas.shift()
console.log('4) elemento removido:', elementoRemovido)
console.log('4) frutas:', frutas)