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
