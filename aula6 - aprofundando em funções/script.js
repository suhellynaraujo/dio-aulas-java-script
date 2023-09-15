//tipos de funções
// funções declarativas
function funcao(){
    console.log("Função declarativa")
}
funcao();

// expressão de função com nomeação
var funcao1 = function funcao2(){
   console.log("Apenas mensagem de uma expressão de função com nomeação");
}
funcao1();

// expressão de função sem nomeação, ou seja opcional
var funcao3 = function(){
    console.log("Apenas mensagem de uma expressão de função sem nomeação");
 }
 funcao3();
 
//Arrow function
var funcao4 = () => {
    console.log("Sou uma Arrow funtion")
}
funcao4();