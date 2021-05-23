const entrada = require('prompt-sync')();

//entrada
let hour = Number(entrada('Insira a quantidade de horas : '));

//processamento
dia = hour / 24
sem = hour / 168
horaR = hour % 24

//saida
console.log("Semanas: ",sem.toFixed(1),)
console.log("Dias:   ",dia.toFixed(0),)
console.log("Horas: ",horaR.toFixed(1),)