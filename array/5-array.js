// keys: Retornar um Array Iterator que contém as chaves para cada elemento do array
const arr = [1, 2, 3, 4]

const arrIterator = arr.keys()

console.log(arrIterator.next())

// values: Retorna um Array Iterator que contém os valores para cada elemento do array
const arr2 = [1, 2, 3, 4]

const arrIterator2 = arr2.values()

console.log(arrIterator2.next())

// entries: Retorna um Array Iterator que contém os pares chave/valor para cada elemento do array
const arr3 = [1, 2, 3, 4]

const arrIterator3 = arr3.entries()

console.log(arrIterator3.next())