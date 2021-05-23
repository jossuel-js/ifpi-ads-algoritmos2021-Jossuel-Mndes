const entrada = require('prompt-sync')();

//entrada
let minutos = Number(entrada('Insira a quantidade de horas : '));

//processamento
dia = minutos / 1440
hora = minutos / 60
min = minutos % 60

//saida
console.log("O numer inserido de horas e igual a: ")
console.log("Dias : ",Math.trunc(dia),);
console.log("Horas: ",hora.toFixed(0),)
console.log("Minutos: ",min.toFixed(1),)