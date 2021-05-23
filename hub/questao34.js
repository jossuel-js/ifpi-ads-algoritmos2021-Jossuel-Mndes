const entrada = require('prompt-sync')();

//entrada
const numero1 = Number(entrada('Insira o primeiro numero : '));
const numero2 = Number(entrada('Insira o primeiro numero : '));
const numero3 = Number(entrada('Insira o primeiro numero : '));

//processamento
media = (numero1 + numero2 + numero3) / 3 ;

//saida
console.log("a media dos numer e igual a : ",media,)
