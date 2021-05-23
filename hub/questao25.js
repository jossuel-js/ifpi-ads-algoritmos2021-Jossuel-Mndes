const entrada = require('prompt-sync')();

//entrada
let metro = Number(entrada('Insira a quantidade de metros : '));

//processamento
mt = metro / 1000 ;
km = mt % 1;

//saida
console.log("",metro,'metros');
console.log('é igual a',Math.trunc(mt),'Km e',km.toFixed(3),'metros');


