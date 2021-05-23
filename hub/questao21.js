const entrada = require("prompt-sync")();

//entrada
frt = Number(entrada("Insira aqui a temperatura em graus °F="));

//processamento
grauC = (frt - 32) / 1.8

//saida
console.log("Sua temperatura em Celsius e:/",grauC.toFixed(1),"°C");
