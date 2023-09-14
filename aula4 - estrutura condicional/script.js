var jogador1 = 0;
var jogador2 = 5;
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

var jogador5 = 5;
var jogador6 = 2;
// ternário
jogador5 != -1 && jogador6 != -1 ? console.log("Os jogadores são válidos") : console.log("Jogadores Inválidos!")

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

//switch/case
switch(placar){
    case placar = jogador5 > jogador6:
        console.log("jogador 5 ganhou");
        break;
    case placar = jogador6 > jogador5:
        console.log("jogador 6 ganhou");
        break;
    default:
        console.log("Ninguém ganhou!")
}

//for

let array = ["valor1", "valor2", "valor3", "valor4"];
let object = {propriedade1: "valor1", propriedade2: "valor2", propriedade3: "valor3", propriedade4: "valor4"};

for(let indice = 0; indice < array.length; indice++){
    console.log(indice);
}


//for/in
for(let i in array){
    console.log(i);
}
//não precisa declarar a variável
for(i in object){
    console.log(i);
}

//for/of 
for(i of array){
    console.log(i);
}

//passando por um , tem que passar o objeto pegando a propriedade, mas geralmente não se usa pois ele imprime os valores separadamente
for(i of object.propriedade1){
    console.log(i);
}

//while
var a = 0;
while(a < 10){
    a ++;
    console.log(a);
}

//do/While
var b = 0;
do{
    b++;
    console.log(b);
}while(b<10);