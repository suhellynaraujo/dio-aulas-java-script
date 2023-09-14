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

```jsx
//o que são vetorres ou arrays
// commo declarar uma array 
let array1 = ["string1", 1, true];
console.log(array1);

//pode guardar vários tipos de dados
let array2 = ["String2", 1, ["array1"], ["array2"], ["array3"], ["array4"]];
console.log(array2);

//pegar somente um vetor por posição, passa a posição correspondente
let array3= ["String3", 1, ["array1"], ["array2"], ["array3"], ["array4"]];
console.log(array3[0]);
```

### Manipulando Arrays por métodos padrão

- forEach() ⇒ itera um array

```jsx
//forEach - itera
array1.forEach(function(item, index){console.log(item, index)});
array1.forEach(function(item, index){console.log(item, index)});
array3.forEach(function(item, index){console.log(item, index)});
```

- push() ⇒ add item no final do array

```jsx
//push - adiciona um item no final de um array
array1.push("novo item");
console.log(array1)
```

- pop() ⇒ remove item no final do array

```jsx
//pop - remove ultimo item de um array
array1.pop();
console.log(array1);
```

- shift() ⇒ remove item no inicio do array

```jsx
// shift - remove o primeiro itemde um array
array1.shift();
console.log(array1);
```

- unshift() ⇒ add item no inicio do array

```jsx
// undeshift -  adiciona um item no inicio de um array
array1.unshift()
console.log(array1);
```

- indexOf() ⇒ retorna o índice de um valor

```jsx
//indexOf - retorna o indice de um valor dentro de um array
console.log(array1.indexOf(true));
```

- splice() ⇒ remove ou substitui um item pelo indice

```jsx
// splice -  remove ou substitui um item pelo indice
//começa com... e vá ate...
array1.splice(0,3);
console.log(array1);
```

- slice() ⇒ retorna uma parte de um array existente

```jsx
//slice - retona uma parte de uma array já esixtente
let novoArray = array1.slice(0, 3);
console.log(array1);
```

### Objetos
dados que possuem propriedades e valores, que definem suas características, devem ser declarados com {}

exemplo:

```jsx
var xicara = {
	cor : 'azul',
	tamanho: 'p',
	funcao: tomarCafe()
}
```

```jsx
let object = {
string: 'string', 
number: 1, 
boolean: true, 
array: ["array"],
objectInterno: {objectInterno: "objeto Interno"}};
console.log(object.objectInterno);
```

Desestruturação de um objeto(manipulação de objeto)

```jsx
var cor = xicara.cor;
var tamanho = xicara.tamanho;
var funcao = tomarCafe();
```

```jsx
var string = object.string;
console.log(string);
```

```jsx
var arrayInterno = object.array;
console.log(arrayInterno);
```

```jsx
var {string, boolean, objectInterno} = object;
console.log(string, boolean , objectInterno);
```

### **Estrutura condicional - decisão repetição/iteração**


Decisão

- If()

```jsx
var jogador1 = -1;
var jogador2 = 0;
var placar;

//if para uma condição
if (jogador1 > 0) {
    console.log("Jogador 1 marocu ponto!")
    // else if para mais condições
} else if (jogador2 > 0) {
    console.log("Jogador 2 marcou ponto!")
    // caso não haja condição
} else {
    console.log("Ninguém marcou ponto!")
}

//usando verificação

//if para uma condição
if (jogador1 > 0 && jogador2 == 0) {
    console.log("Jogador 1 marocu ponto!")
    placar = jogador1 > jogador2;
    console.log(jogador1)
    // else if para mais condições
} else if (jogador2 > 0 && jogador1 == 0) {
    console.log("Jogador 2 marcou ponto!")
    placar = jogador2 > jogador1;
    console.log(jogador2)
    // caso não haja condição
} else {
    console.log("Ninguém marcou ponto!")
}
```

```jsx
var jogador3 = 2;
var jogador4 = 0;

// condição aninhada ou ninho de ifs
// executa ou não a condição
if (jogador3 != -1) {
    //if para uma condição
    if (jogador3 > 0) {
        console.log("Jogador 3 marocu ponto!")
        // else if para mais condições
    } else if (jogador4 > 0) {
        console.log("Jogador 4 marcou ponto!")
        // caso não haja condição
    } else {
        console.log("Ninguém marcou ponto!")
    }
}
```

- If ternário

[condição] ? [instrução] : [instrução2]

```jsx
var jogador5 = -1;
var jogador6 = 0;
// ternário
jogador5 != -1 && jogador6 != -1 ? console.log("Os dois jogadores são válidos") : console.log("Jogadores Inválidos!")
//if para uma condição
if (jogador5 > 0) {
    console.log("Jogador 5 marocu ponto!")
    // else if para mais condições
} else if (jogador6 > 0) {
    console.log("Jogador 6 marcou ponto!")
    // caso não haja condição
} else {
    console.log("Ninguém marcou ponto!")
}
```