const entrada = require('prompt-sync')()

//entrada
const veloc_KM = Number(entrada("Insira a unidade de medida(km/h) :"))

//processamento
veloc_m = veloc_KM * 1000;

//saida
console.log("sua unidade km de :",veloc_KM, "(km) e igual a:",veloc_m,"metros.")