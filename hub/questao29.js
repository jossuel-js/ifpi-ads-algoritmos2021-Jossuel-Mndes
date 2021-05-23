const entrada = require('prompt-sync')();

//entrada
let meses = Number(entrada('Insira a quantidade de meses : '));

//processamento
anos = meses / 12 ;
mesesR= meses % 12;

//saida
console.log("",meses,'meses');
console.log('é igual a',Math.trunc(anos),'anos e',mesesR,'meses');