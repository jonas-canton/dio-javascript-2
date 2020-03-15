function fn() {
    console.log(text) // undefined, porque no hoisting de variáveis apenas a declaração é içada, não o seu conteúdo

    var text = 'Exemplo'

    console.log(text)
}

fn()

/*
function fn() {
    var text;
    console.log(text)

    text = 'Exemplo'

    console.log(text)
}
*/