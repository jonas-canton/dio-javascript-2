const user = {
    name: 'Jonas',
    lastName: 'Canton'
}

function getUserWithFullName(user) {
    return {
        ...user, // spread operator
        fullName: `${user.name} ${user.lastName}` // template string
    }
}

const userWithFullName = getUserWithFullName(user)

console.log(userWithFullName)