const entrada = require('prompt-sync')()

//entrada
let numero = Number(entrada('Insira seu numero:/'));

//processamento

let cent = numero / 100
centR = numero % 100
const dezena = centR / 10
const unidade = centR % 10
const restoT = Math.trunc(cent + dezena + unidade);

//saida
console.log("A soma dos seus elementos vale",(restoT));
