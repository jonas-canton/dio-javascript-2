(() => {
    this.name = 'arrow function'
    
    const getNameArrowFn = () => this.name // Em Arrow Function, o this referencia o contexto onde ela foi criada
    
    function getName() {
        return this.name // Em funções "normais", o this referencia o contexto onde ela foi executada
    }
    
    const user = {
        name: 'Nome no objeto de execução',
        getNameArrowFn,
        getName
    }
    
    console.log(user.getNameArrowFn())
    console.log(user.getName())
})()