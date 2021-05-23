const entrada = require('prompt-sync')();

// Entrada
const valmerca = Number(entrada('Insira o valor do produto: '));


// Processamento 
parcelas = valmerca / 3
entradaP = parcelas + valmerca % 3

// Saída
console.log("O valor de entrada do produto e : ","R$",Math.trunc(entradaP)," E suas parcelas respectivamente sao iguais a :","R$",Math.trunc(parcelas))