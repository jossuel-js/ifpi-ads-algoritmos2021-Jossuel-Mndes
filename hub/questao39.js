const entrada = require('prompt-sync')();

// Entrada
entrada("Insira 3 numeros inteiros positivos")

//processamento
let Num1 = Number(entrada("Primeiro numero: "));
let Num2 = Number(entrada("Segundo numero: "));
let Num3 = Number(entrada("Terceiro numero: "));

letraRS = (Num1 + Num2)*(Num1 + Num2) + (Num2 + Num3) * (Num2 + Num3)
letraD = letraRS / 2 

//saida
console.log("O resultado da expressao e :",letraD,)

