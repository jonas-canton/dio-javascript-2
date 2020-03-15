let user = {
    name: 'Jonas'
}

console.log(user)

// Alterando a propriedade do objeto
user.name = 'Outro nome 1'

console.log(user)

user['name'] = 'Outro nome 2'

console.log(user)

const prop = 'name'
user[prop] = 'Outro nome 3'

console.log(user)

// Criando uma propriedade
user.lastName = 'Canton'

console.log(user)

// Deletando uma proprieadade
delete user.name

console.log(user)