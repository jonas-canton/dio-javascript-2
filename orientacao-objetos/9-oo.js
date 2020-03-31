// Encapsulamento no JavaScript numa versão que não dá suporte a classes

function Person(initialName) {
    var name = initialName

    Object.defineProperty(this, 'name', {
        get: function() {
            return name
        },
        set: function(value) {
            name = value
        }
    })
}

const p = new Person('Jonas')

p.name // Executa o "get"

console.log(p.name) // Jonas

p.name = 'Outro' // Executa o "set"

console.log(p.name) // Outro