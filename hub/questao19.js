const entrada = require('prompt-sync')();

//entrada
let raio = Number(entrada('Informe o raio da circunferencia :'));

//processamento
raio2 = raio * raio * raio
raio1 = (4 * 3.14 * raio2 ) / 3 ;

//saida
console.log("O volume da esfera e : ",raio1.toFixed(1));