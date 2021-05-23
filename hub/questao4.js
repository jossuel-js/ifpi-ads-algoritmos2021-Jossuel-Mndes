const entrada = require('prompt-sync')()

//entrada

let dolar = Number(entrada('converção dolar para real:'));

//processamento
 real = dolar * 5.27 ;

//saida
console.log("/=",dolar,'dolares');
console.log('é igual a',real,'reais');

