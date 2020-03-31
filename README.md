# dio_javascript_2
Exercícios do curso JavaScript ES6 Essencial da Digital Innovation One

Lançado em setembro de 1995.

Criado por Brendan Eich.

ECMAScript é uma especificação do JavaScript, quem cuida disso é um comitê chamado TC39.

Fluxo de proposta:
    Stage 0: strawman
    Stage 1: proposal
    Stage 2: draft
    Stage 3: candidate
    Stage 4: finished

ES2018:
    Operadores rest/spread
    Iteração assíncrona
    Promise.prototype.finally()

ES.Next
    Pode ser testado pelo Babel (um transpilador JavaScript, transforma uma versão X numa mais antiga)

O JS é uma linguagem interpretada, ou seja, o código é executado de cima para baixo e o resultado da execução é imediatamente retornado.

Fracamente tipada e dinâmica.

Pode-se usar o Typescript para resolver possíveis problemas decorrentes da tipagem fraca e dinâmica.

Typescript é um superset do JS. Além de fornecer tipagem, adiciona novas funcionalidades ao JS.

Ver typescriptlang.org

Flow é semelhante ao Typescript, mas não é um superset, ele fornece tipagem forte.

JS possui funções de primeira classe e ordem maior.

Closure, ou escopo léxico, é a capacidade de uma função lembrar do escopo onde ela foi criada.

Currying é a técnica de transformar uma função "memorizar" um parâmetro que em seguida é passado a outra função que o utilizará.

Hoisting é um comportamento padrão do JS que faz com que todas as declarações sejam movidas ao topo do seus escopos.

Imutabilidade

Tipos e Variáveis
    var
    let
    const

Tipos de variáveis:

string
number (engloba números inteiros e decimais)
boolean
null
undefined
symbol
Object
Function
Array

Operadores:

Aritméticos
Atribuição
Comparação
Condicional
Lógicos
Spread

Orientação a Objetos
Herança
    Baseada em protótipos
    prototype - armazena as definições do nosso objeto
    __proto__ - aponta para o prototype do tipo que foi criado
    constructor
Classes
    ES6
    Simplificação da herança de protótipos
    Palavra chave class
Modificador de Acesso
    public/private
Encapsulamento
    Ocultar detalhes do funcionamento interno
Static
    Acessar métodos/atributos sem instanciar

Introdução a Design Patterns
    Definição: são soluções generalistas para problemas recorrentes durante o desenvolvimento de um software.
    Não se trata de um framework ou um código pronto, mas de uma definição de ato nível de como um problema comum pode ser solucionado.
    Surgiu com o livro A Pattern Language, lançado em 1978 por Cristopher Alexander, Sara Ishikawa e Murray Silverstein, e que mostra
    253 tipos de problemas/desafios de projetos.
    Nesse livro, definiu-se o formato de um patten:
        - Nome
        - Exemplo
        - Contexto
        - Problema
        - Solução
    Em 1987, Kent Beck e Ward Cunningham falaram sobre 5 padrões de projetos em uma palestra conhecida como Using Pattern Languages for Object-Oriented Programs
    Em 1994, Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides (conhecidos como GoF - Gang of Four) lançaram o livro Design Patterns: Elements of Reousable
    Object-Oriented Software
    No livro acima, os design patters são estruturados em 3 tipos:
        - Criação
        - Estruturais
        - Comportamentais
    Padrões de criação
        Os padrões de criação são aqueles que abstraem e/ou adiam o processo de criação dos objetos. Eles ajudam a tornar um sistema independente de como seus
        objetos são criados, compostos e representados.
    Os mais famosos padrões de criação são:
        - Abstract Factory
        - Builder
        - Factory Method
        - Prototype
        - Singleton
    Padrões estruturais
        Os padrões estruturais se preocupam com a forma como classes e objetos são compostos para formar estruturas maiores. Dentre eles, temos:
        - Adapter
        - Bridge
        - Composite
        - Decorator
        - Facade
        - Business Delegate
        - Flyweight
        - Proxy
    Padrões comportamentais
        Os padrões de comportamento se concentram nos algoritmos e atribuições de responsabilidades entre os objetos. Eles não descrevem apenas
        padrões de objetos ou de classes, mas também os padrões de comunicação entre os objetos. Dentre eles, temos:
        - Chain of Responsability
        - Command
        - Interpreter
        - Iterator
        - Mediator
        - Observer
        - State
        - Strategy
        - Template Method
        - Visitor
    Patterns mais utilizados
        - Factory
        - Singleton
        - Decorator
        - Observer
        - Module
    Factory
        Todas as funções que retornam um objeto, sem a necessidade de chamá-los com o new, são consideradas funções Factory (fábrica).
    Singleton
        O objetivo desse pattern é criar uma única instância de uma função construtora e retorná-la toda vez em que for necessário utilizá-la (ex.: o próprio jQuery)
    Decorator
        Uma função decorator recebe uma outra função como parâmetro e estende o seu comportamento sem modificá-la explicitamente.
    Observer
        E um pattern muito popular em aplicações JavaScript. A instância (subscriber) mantém uma coleção de objetos (observers) e notifica todos eles quando ocorrem mudanças no estado.
    Module
        É um pattern que possibilita organizarmos melhor o nosso código, sem a necessidade de expor variáveis globais.