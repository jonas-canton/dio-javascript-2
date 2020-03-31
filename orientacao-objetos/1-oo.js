const myText = 'Hello prototype!'

console.log(myText.split(''))

// A declaração acima é a mesma que essa:
const myText2 = String('Hello prototype!')

// Toda variável criada através de uma função construtora, tem a referência à propriedade __proto__
console.log(myText.constructor) // String
console.log(myText.__proto__.split === String.prototype.split) // true
console.log(myText.constructor === String) // true
console.log(myText.__proto__ === String.prototype) // true

function Teste() { }
console.log(Teste.constructor) // Function

// Obs.: funções em JS são objetos

