const entrada = require('prompt-sync')()

//entrada

let numero = Number(entrada('Insira seu numero:/'));
num1 = numero

const numero1 = Number(entrada('Insira outro numero:/'));
num2 = numero1

const numero2 = Number(entrada('Insira outro numero:/'));
num3 = numero2

//processamento
let x = num2 + num1;
let y = num2 - num3;

//saida
console.log("O resultado da sua soma dos primeiros numeros e ",x,"...");
console.log("O resultado da diferença dos ultimos numeros e",y,"...");