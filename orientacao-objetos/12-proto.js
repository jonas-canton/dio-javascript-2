const meuObjeto = {
    a: 1,
    b: 2
}

// meuObjeto.__proto__ -> Object.prototype -> null

const meuArray = [1, 2, 3, 'a', 'b']

// meuArray.__proto__ -> Array.prototype -> Object.prototype -> null

function minhaFuncao() {
    return 1 * 2
}

// minhaFuncao.__proto__ -> Function.prototype -> Object.prototype -> null