//tipos primitivos

//boolean
var vOuf = false;
console.log(vOuf);
console.log(typeof(vOuf));

//number
var numero = 1;
console.log(numero);
console.log(typeof(numero));

//String
var string = 'abc';
console.log(string);
console.log(typeof(string));

//valor undefined
var variavel;
variavel = 'var: pode ser alterada, e sem necessidade de inicializar'
console.log(variavel);

let variavel2;
variavel2  = 'let: pode ser alterada, e sem necessidade de inicializar '
console.log(variavel2);

const constante = 'const: não pode ser alterada, obrigatório inicializar';
console.log(constante);

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
    //variavel vista somente dentro do bloco
    let escopoLocalInterno ='local';
    console.log(escopoLocalInterno);
}
//retorna a função
escopoLocal();




