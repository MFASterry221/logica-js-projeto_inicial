let numeroSecreto = Math.floor(Math.random() * 5 + 1);
let tentativas = 1;

//while é para repetir o código
while(tentativas > 4){
    let numeroDigitado = parseInt(prompt('Digite um número de 1 a 5'));
    if(numeroDigitado === numeroSecreto){
        alert('Você não errou, parabéns!');
        break;
    }else if(numeroDigitado > numeroSecreto){
        alert('Você digitou o número que é maior que o número secreto');
    }else{
        alert('Você digitou o número que é menor que o número secreto');
    }tentativas++;
    if(tentativas === 4){
        alert('Suas tentativas acabaram');
    }else if(tentativas <3){
        alert(`Você ainda tem ${4 - tentativas} tentativas`);
    }else{
        alert(`Você ainda tem ${4 - tentativas} tentativa`);
    }
