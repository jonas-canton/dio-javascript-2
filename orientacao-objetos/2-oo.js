function Animal() {
    this.qtdePatas = 4
}

const cachorro = new Animal()

/*
    Quando new é usado, o que ocorre?
    1 - Um novo objeto é criado, herdando o Animal.prototype.
    2 - A função construtora Animal é chamada com os argumentos especificados e com o 'this' vinculado ao novo objeto criado.
    3 - Caso a função construtora tenha um retorno explícito, será respeitado o seu 'return'. Senão, será retornado o objeto criado no passo 1.
*/

console.log(cachorro.qtdePatas) // 4
console.log(cachorro.__proto__ === Animal.prototype) // true
console.log(Animal.__proto__ === Function.prototype) // true
console.log(cachorro instanceof Animal) // true
console.log(cachorro instanceof Function) // false


function Pessoa(name) {
    this.name = name

    return {
        name: 'Teste'
    }
}

const p = new Pessoa('Jonas') // Como a função construtora tem um return explícito, o que for passado por parâmetro não será respeitado
console.log(p)