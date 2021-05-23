const entrada = require('prompt-sync')();

// Entrada

let Num1 = Number(entrada("numero de anos que fuma: "));
let Num2 = Number(entrada("Numero de cigarros: "));
let Num3 = Number(entrada("preço de uma carteira: "));

//processamento
cigasF = Num2 * 365
TotalCi = cigasF * Num1
gastoT =  TotalCi / 20 * Num3

//saida
console.log("Voce gastou anualmente :","R$",gastoT,"com cigarros")