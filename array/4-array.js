const arr = [1, 2, 3, 4, 5]

// forEach: Iteração de cada elemento de um array
arr.forEach((value, index) => {
    console.log(`${index}: ${value}`)
})

// map: Retorna um novo array, de mesmo tamanho, iterando cada elemento de um array
const arr2 = arr.map(value => value * 2)
console.log(arr2)

// flat: Retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a profundidade especificada (depth)
const idades = [20, 34, [35, 60, [70, 40]]]
console.log('idades =', idades)
console.log('flat(1) ->', idades.flat(1))
console.log('flat(2) ->', idades.flat(2))

// flatMap: Retorna um novo array assim como a função map e executa um flat de profundidade 1
const numeros = [1, 2, 3, 4]
console.log('numeros =', numeros)
console.log(numeros.flatMap(value => [value * 2]))
console.log(numeros.flatMap(value => [[value * 2]]))