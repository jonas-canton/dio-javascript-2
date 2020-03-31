function SalaAula(alunos) {
    this.alunos = alunos || []
}

SalaAula.prototype = {
    adicionarAluno: function(aluno) {
        this.alunos.push(aluno)
    },
    mostraAlunos: function() {
        return this.alunos
    }
}

function NovaSala() {
    SalaAula.call(this)
}

NovaSala.prototype = Object.create(SalaAula.prototype) // Para a NovaSala herdar métodos e propriedades de SalaAula

const novaSala = new NovaSala()

//const novaSala = Object.create(NovaSala.prototype)
//class NovaSala extends SalaAula {}

novaSala.adicionarAluno('João')

console.log(novaSala.mostraAlunos())