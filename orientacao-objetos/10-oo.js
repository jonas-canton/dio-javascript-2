// Encapsulamento no JavaScript numa versão que dá suporte a classes

class Person {
    #name = ''

    constructor(name) {
        this.#name = name
    }

    get name() {
        return this.#name
    }

    set name(name) {
        this.#name = name
    }
}

const p = new Person('Jonas')

p.name // Executa o "get"

console.log(p.name) // Jonas

p.name = 'Outro' // Executa o "set"

console.log(p.name) // Outro