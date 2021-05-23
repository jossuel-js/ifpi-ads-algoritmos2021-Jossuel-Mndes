const entrada = require('prompt-sync')()

//entrada
let veloc_M = Number(entrada("Insira a unidade de medida(M) :"))

//processamento
veloc_DC = veloc_M * 100;


//saida
console.log("sua unidade M de :",veloc_M, "(m) e igual a:",veloc_DC,"decimetros.")