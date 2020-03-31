// Exemplos

var SETTINGS = {
    api: 'http://localhost',
    trackJsToken: '12345'
}

function Pessoa() {
    if (!Pessoa.instance) {
        Pessoa.instance = this
    }

    return Pessoa.instance
}

const p = Pessoa.call({ name: 'Jonas' })
const p1 = Pessoa.call({ name: 'Outro' })

console.log('p = ', p, 'p1 = ', p1)