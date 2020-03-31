// Modificador de acesso - exemplo que funciona no Node.js

class Person {
    #name = '' // o # vai dizer que a propriedade é privada

    constructor(initialName) {
        this.#name = initialName
    }

    setName(name) {
        this.#name = name
    }

    getName() {
        return this.#name
    }
}

const p = new Person('Jonas')

console.log(p) // Person { getName: [Function], setName: [Function] }
console.log(p.getName()) // Jonas
console.log(p.name) // undefined
p.setName('Outro')
console.log(p.getName()) // Outro