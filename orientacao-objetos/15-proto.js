const meuObjeto = {
    a: 1,
    b: 2
}

const novoObjeto = Object.create(meuObjeto)

novoObjeto.novaPropriedade = 5

function SalaAula(alunos) {
    this.alunos = alunos
}

SalaAula.prototype = {
    adicionarAluno: function(aluno) {
        this.alunos.push(aluno)
    }
}

const minhaSala = new SalaAula(['João', 'Maria'])

minhaSala.adicionarAluno('Pedro')