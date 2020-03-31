// Modificador de acesso

function Person(initialName) {
    let name = initialName

    this.getName = function() {
        return name
    }

    this.setName = function(newName) {
        name = newName
    }
}

const p = new Person('Jonas')

console.log(p) // Person { getName: [Function], setName: [Function] }
console.log(p.getName()) // Jonas
console.log(p.name) // undefined
p.setName('Outro')
console.log(p.getName()) // Outro