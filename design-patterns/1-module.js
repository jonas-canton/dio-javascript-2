// Como era antes
// (function($) {
//     // your plugin here
// })(jQuery)

let name = 'default'

function getName() {
    return name
}

function setName(newName) {
    name = newName
}

module.exports = {
    getName,
    setName
}