alert('Bem vindo ao jogo do número secreto');

let numeroSecreto = 3;
let numeroDigitado = parseInt(prompt('Digite um número de 0 a 1'));

if(numeroDigitado === numeroSecreto){
    alert('Você não errou, parabéns!');
}else{
    alert('Você não acertou, tente novamente!');
}