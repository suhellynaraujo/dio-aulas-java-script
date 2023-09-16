function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtrção (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação(**)'));

    //verificar se a operação é válida, se digitado um valor a cima do que foi declarado como operações 
    if (!operacao || operacao >= 7) {
        alert('Erro - Operação inválida!');
        calculadora();

    } else {
        //variaveis
        //Number(prompt('Insira o primeiro valor')); informa que minha variável será convertida para TIPO numero
        let n1 = Number(prompt('Insira o primeiro valor'));
        let n2 = Number(prompt('Insira o segundo valor'));
        let resultado;

        //verifica se as variaveis são válidas
        if (!n1 || !n2) {
            alert('Erro - Parametros inválidos!');
            calculadora();

        } else {

            //funções
            // utilizar crase (``) para strings, expressões e variáveis juntos, porem para chamar as variáveis, inicializamos com sifrao ($)

            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`O resultado do resto da divião entre ${n1} e ${n2} é igual a ${resultado}`);
                novaOperacao();
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} Elevado a ${n2}ª é igual a ${resultado}`);
                novaOperacao();
            }

            //chamar caso queira realizar nova operação, deve ser chamada a cada função 
            function novaOperacao() {
                let opcao = prompt('Deseja reallizar nova operação? \n 1 - Sim \n 2 - Não')
                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Obrigada por usar a calculadora, até mais!!')
                } else {
                    alert('Digite uma opção válida!')
                    novaOperacao();
                }
            }

        }

        /*//verificador de operação
        if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divisaoReal();
        } else if (operacao == 5) {
            divisaoInteira();
        } else if (operacao == 6) {
            potenciacao();
        }*/

        switch (operacao) {
            case 1: soma();
                break;
            case 2: subtracao();
                break;
            case 3: multiplicacao();
                break;
            case 4: divisaoReal();
                break;
            case 5: divisaoInteira();
                break;
            case 6: potenciacao();
                break;
            default:
                ('Operação inválida!');

        };
    }
}
calculadora();