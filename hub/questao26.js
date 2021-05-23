const entrada = require('prompt-sync')();

//entrada
let dias = Number(entrada('Insira a quantidade de dias : '));

//processamento
seman = Math.trunc( dias / 7);
diaR = dias % 7;

//saida
console.log("/",dias,'dias');
console.log('é igual a',seman,'semanas e',diaR,'dias');
