const entrada = require("prompt-sync")();

//entrada
grauC = Number(entrada("Insira aqui a temperatura em graus °F =/"));

//processamento
 frt = grauC * 1.8 + 32;
 
//saida
console.log("Sua temperatura em farenheit e:/",frt.toFixed(1),"°F");