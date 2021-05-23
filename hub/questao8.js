const entrada = require('prompt-sync')()

//entrada
let numero = Number(entrada('Insira seu numero:/'));
num1 = numero

const numero1 = Number(entrada('Insira outro numero:/'));
num2 = numero1

//processamento

var soma = num1 + num2
var sub = num1 - num2
var divisao = soma/sub;
//saida
console.log("O resultado da soma pela divisao da subtração de seus numeros e:/",Math.trunc(divisao),"...")