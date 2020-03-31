const meuObjeto = {
    a: 1,
    b: 2
}

let novoObjeto = meuObjeto

novoObjeto.b = 5

console.log(meuObjeto.b + novoObjeto.b) // Vai ser 10, pois o novoObjeto é apenas uma referência ao meuObjeto

// Caso eu queria criar um novo objeto a partir do meuObjeto:

novoObjeto = Object.create(meuObjeto)

console.log(meuObjeto.a + novoObjeto.b) // 1 + 5 = 6

console.log(meuObjeto.hasOwnProperty('a'), novoObjeto.hasOwnProperty('a'))