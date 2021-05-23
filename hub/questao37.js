const entrada = require('prompt-sync')();

// Entrada

const dias = Number(entrada("Insira seus Dias de vida: "));

//processamento
anos = dias / 365 ;
anos1 = dias % 365

meses = (anos %1) * 10
diaR = anos + meses % 30

//saida
console.log(dias,"Dias e igual a :",Math.trunc(anos),"anos")
console.log(Math.trunc(meses),"meses")
console.log(Math.trunc(diaR),"dias")