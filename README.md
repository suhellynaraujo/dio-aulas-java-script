# **O que é Java Script**

- Linguagem de programação de alto nível , que integra o desenvolvimento de apps e páginas web
- Cria scripts dinâmicos juntamente com hml e css

# **Variáveis e valores**

- Tipagem
    - Js é tipagem fraca, modo dinâmico
    - Regra de uso de dados, quanto mais forte mais obrigatório
    - Variáveis entre “ “, o JS converte para string
- Tipos primitivos
    - Boolean
    - null
    - undefined
    - number
    - String
    - Array
    - Object
    - Function
    
- Variáveis
    - Dados que variam
    - var
        
        global e local, pode ter o valor alterado, seu valor inicial é null
        
    - let
        
        local de bloco, pode ter seu valor alterado, seu valor inicial é null
        
    - const
        
        global de bloco, somente leitura, valor inicial obrigatório, não pode ser alterado
        
    
- Escopo
    
    Defini a limitação e visibilidade de um bloco de código
    
    - Escopo global
        - quando uma variável é declarada fora de qualquer bloco, fica visível para ser ‘reutilizada’ em outras partes do código
    - Escopo local
        - quando uma variável é declarada adentro de um bloco, sua visibilidade pode ser disponível ou não
    
- Atribuição
    
    sinal de = 
    
- Comparação
    
    sinal de ==
    
- Comparação idêntica
    
    sinal ===
    
- Operadores
    - Adição  sinal barra(+)
    - Subtração  sinal barra(-)
    - Multiplicação  sinal barra(*)
    - Divisão real sinal barra(/)
    - Divisão de inteiro  sinal barra(%)
    - Potenciação  sinal barra(**)

- Operadores relacionais
    - maior que >
    - menor que <
    - maior ou igual a >=
    - menor ou igual a <=

- Operadores Lógicos
    - && = e todos os valores verdadeiros
    - || = ou qualquer valor verdadeiro
    - ! = não inverte o valor de verdadeiro para falso ou vice-versa


# **Vetores e Objeto**

### Vetores ou arrays

- Tipo de lista , ou matriz de variáveis onde cada variável possui um índice, os valores podem ser vários tipos
- Array deve ser declarado entre colchetes ,podendo guardar qualquer valor dentro dos índices , inclusive outros arrays
- Sempre começando o índice por 0, separado por vírgula

### Manipulando Arrays por métodos padrão

- forEach() ⇒ itera um array

- push() ⇒ add item no final do array

- pop() ⇒ remove item no final do array

- shift() ⇒ remove item no inicio do array

- unshift() ⇒ add item no inicio do array

- indexOf() ⇒ retorna o índice de um valor

- splice() ⇒ remove ou substitui um item pelo indice

- slice() ⇒ retorna uma parte de um array existente


### Objetos
dados que possuem propriedades e valores, que definem suas características, devem ser declarados com {}

Desestruturação de um objeto(manipulação de objeto)

# **Estrutura condicional - decisão repetição/iteração**


## Decisão

- If(){

}

- if(){

}else{

}

- if(){

}else if(){


}else{


}

- If ternário
[condição] ? [instrução] : [instrução2]

- Switch / case

switch(expressão){
    case 1:
        {instrução};
        break;
    case 2:
        {instrução};
        breack;
    default:
        {instrução};
}

## Repetição

- for
    for([expressaoInicial]; [condição]; [incremento/decremento]){
        declaração;
}

- for/in
    for([indece] in [objeto ou array]){
        declaração;
    }

- For/of
    for([indice] of [array]){
        declaração;
    }

- While
    while([expressao]){
        incremento/decremento;
          declaração;
    }

-  do/While
    do{
        incremento/decremento;
          declaração;
    }while([expressao]);

# **Funções**

- Function  

    function nomeDaFunção(){
        instrução;
    } nomeDaFunção();

- Função com parametros

    function nomeDaFunção(parametro){
        instrução;
    } nomeDaFunção(valorDoparametro);

# **Aprofundamento em funções**

## Tipos de funções

- Declarativas

Possuem o uso mais comum, devem ser declaradas da seguinte forma


function nomeDaFunção(){
        instrução;
    } nomeDaFunção();


- Expressões

São funções atribuídas a expressões, nomeação é opcional

var funcao = function nomeDaFuncao(){
		instrução;
}
funcao();

- Arrow Function

Funções de expressão de sintaxe curta, sempre anônimas, não podem ser renomeadas, declaradas da seguinte forma

var funcao = () => {
    instrução;
}
funcao();

## Funções aritmética

Criando uma calculadora

- Number() ⇒ converte valores em números
- Prompt() ⇒ registra entradas dos usuários
- Alert() ⇒ mostra mensagens ao usuário
- Template Strings ⇒ usa strings junto com expressões