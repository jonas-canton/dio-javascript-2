// Exemplo de "herança"

function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas
    this.movimentar = function() { }
}

function Cachorro(morde) {
    Animal.call(this, 4)
    
    this.morde = morde
    this.latir = function() {
        console.log('Au! Au!')
    }
}

const pug = new Cachorro(false)
const pitbull = new Cachorro(true)

console.log(pug)

/*
    O problema da implementação acima é que, toda vez que der um new Cachorro, as funções
    movimentar e latir serão criadas
*/