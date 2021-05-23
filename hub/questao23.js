const entrada = require('prompt-sync')()

//entrada
let peso_KG = Number(entrada("Insira seu peso em(KG) :"))

//processamentp
peso_G = peso_KG * 1000;

//saida
console.log("Seu peso em gramas e:",peso_G,".")