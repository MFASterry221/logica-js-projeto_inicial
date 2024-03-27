//aparece para o usuário uma janela de alerta
alert('Bem vindo ao jogo');

//let é usado para declarar um variável. usa o sianl de "=" para atribuir um valor
let numeroSecreto = Math.floor(Math.random() * 15);
let numeroTentativas = 0;
//parseInt para converter número em inteiro; prompt para caixa de entrada no navegador
let numeroEscolhido = parseInt(prompt('Digite um número de 0 a 15'));

//if eu eu uso para testar uma lógica! "==" para igual, "> ou <"maior ou menor," >= ou <="
//else é usado par ao se não, ou seja, quando um teste lógico do if der false.  
//else if se quiser criar um outro teste lógico ápos um if.
if(numeroSecreto == numeroEscolhido){
    alert(`Parabéns você acertou o número ${numeroSecreto} `)
    }else if(numeroEscolhido > numeroSecreto){
        alert(`Você digitou ${numeroEscolhido} que é um número maior que o número secreto`);
    }else {
        alert(`Você digitou ${numeroEscolhido} que é um número menor que o número secreto`);
    }

while(numeroTentativas <= 2) {
    let numeroEscolhido = parseInt(prompt('Digite um número de 0 a 15'));
    if(numeroSecreto == numeroEscolhido){
        alert(`Parabéns você acertou o número ${numeroSecreto} `);
        break;
        }else if(numeroEscolhido > numeroSecreto){
            alert(`Você digitou ${numeroEscolhido} que é um número maior que o número secreto`);
        }else {
            alert(`Você digitou ${numeroEscolhido} que é um número menor que o número secreto`);
        }
    numeroTentativas = numeroTentativas + 1;
}