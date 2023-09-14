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

//forEach - itera 
array1.forEach(function(item, index){console.log(item, index)});
array1.forEach(function(item, index){console.log(item, index)});
array3.forEach(function(item, index){console.log(item, index)});

//push - adiciona um item no final de um array
array1.push("novo item");
console.log(array1)

//pop - remove ultimo item de um array
array1.pop();
console.log(array1);

// shift - remove o primeiro itemde um array
array1.shift();
console.log(array1);

// undeshift -  adiciona um item no inicio de um array
array1.unshift()
console.log(array1);

//indexOf - retorna o indice de um valor dentro de um array
console.log(array1.indexOf(true));

// splice -  remove ou substitui um item pelo indice
//começa com... e vá ate...
array1.splice(0,3);
console.log(array1);

//slice - retona uma parte de uma array já esixtente
let novoArray = array1.slice(0, 3);
console.log(array1);

//desestruturação
let object = {string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: "objeto Interno"}};

var {string, boolean, objectInterno} = object;
console.log(string, boolean , objectInterno);


