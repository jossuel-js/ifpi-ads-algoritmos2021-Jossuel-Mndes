const entrada = require('prompt-sync')();

//entrada
const x1 = Number(entrada("x1 = : "));
const y1 = Number(entrada("y1 = : "));
const x2 = Number(entrada("x2 = : "));
const y2 = Number(entrada("y2 = : "));

//processamento
const parcial = Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2);
const distancia = Math.sqrt(parcial);

//saida
console.log(distancia)