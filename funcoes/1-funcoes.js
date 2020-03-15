// Função de Primeira Classe

function getName() {
    return 'Jonas Canton'
}

function logFn(fn) {
    console.log(fn())
}

const logFnResult = logFn

logFnResult(getName)