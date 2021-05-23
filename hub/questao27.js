const entrada = require('prompt-sync')();

//entrada
let segs = Number(entrada('Insira a quantidade de segundos : '));

//processamento
segs1 = segs % 60
min = segs / 60 
hora = segs / 3600

//saida
console.log("segundos:",segs1.toFixed(1),"s")
console.log("minutos:",min.toFixed(1),"mins")
console.log("horas:",hora.toFixed(1),"h")