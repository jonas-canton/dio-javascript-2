let arr = [3, 5, 7]
arr.foo = 'hello'

for (let i in arr) {
    console.log(i) // logs "0", "1", "2", "foo" (exibe cada índice do array)
}

for (let i of arr) {
    console.log(i) // logs "3", "5", "7" (só executa para os valores numéricos)
}