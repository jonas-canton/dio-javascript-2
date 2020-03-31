// Métodos Static numa versão JavaScript sem suporte a classes

function Person() {}

Person.walk = function() {
    console.log('Walking...')
}

Person.walk()

// Com suporte a classes

class Person2 {
    static walk() {
        console.log('Walking...')
    }
}

Person2.walk()