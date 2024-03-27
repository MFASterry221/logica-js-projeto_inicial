alert('Bem vindos ao jogo do número secreto');

let numeroSecreto = Math.floor(Math.random() * 5);
let numeroDigitado = parseInt(prompt('Digite um número de 0 a 5'));

if(numeroDigitado === numeroSecreto){
    alert('Você não errou, parabéns!');
}else if(numeroDigitado > numeroSecreto){
    alert('Você digitou o número que é maior que o número secreto');
}else{
    alert('Você digitou o número que é menor que o número secreto');
}