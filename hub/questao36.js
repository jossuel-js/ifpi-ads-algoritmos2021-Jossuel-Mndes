const entrada = require('prompt-sync')();

// Entrada
entrada("Insira seus anos ,meses e dias de vida para saber sua quantidade de dias de vida")

//processamento
const anos1 = Number(entrada("Insira sua idade em Anos: "));
const meses1 = Number(entrada("Insira os meses: "));
const dias1 = Number(entrada("Insira os dias: "));

ano = anos1 * 365 ;
mes = meses1 * 30 ;
somaT = (ano + mes + dias1)

//saida
console.log("Seu tempo de vida e igual a : ",Math.trunc(somaT),"Dias");

