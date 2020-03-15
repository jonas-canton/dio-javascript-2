const name = 'Jonas'

// Não podemos alterar o valor
name = 'João'

const user = {
    name: 'Jonas'
}

// Mas se for um objeto, podemos trocar suas propriedades
user.name = 'João'

// Não podemos fazer o objeto "apontar" para outro lugar
user = {
    name: 'João'
}

const persons = ['Maria', 'José', 'João']

// Podemos adicionar novos itens
persons.push('Pedro')

// Podemos remover algum item
persons.shift() // remove o primeiro item do array

// Podemos alterar diretamente
persons[1] = 'James'

console.log('\nArray após as alterações: ', persons)