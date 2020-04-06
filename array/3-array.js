// Juntar arrays
const frutas = ['banana', 'melancia', 'kiwi']
const salgados = ['coxinha', 'kibe', 'pastel']
const alimentos = frutas.concat(salgados)
console.log('alimentos:', alimentos)

// Fatiar array (semelhante ao substring)
const arr = [1, 2, 3, 4, 5]
console.log('\n', arr)
console.log('\nslice(0, 2) ->', arr.slice(0, 2))
console.log('slice(2) ->', arr.slice(2))
console.log('slice(-1) ->', arr.slice(-1))
console.log('slice(-3) ->', arr.slice(-3))

// Alterar um array adicionando novos elementos enquanto remove elementos antigos
// O método splice retorna sempre o que foi removido
console.log('\nsplice(2) ->', arr.splice(2))
console.log('resultado:', arr)
console.log('splice(0, 0, \'first\') ->', arr.splice(0, 0, 'first')) // Interpretando: adicionar elemento 'first' no índice 0 e remover 0 elementos
console.log('resultado', arr)
console.log('splice(arr) ->', arr.splice(arr))
console.log('resultado', arr)