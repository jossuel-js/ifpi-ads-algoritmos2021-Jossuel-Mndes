const entrada = require('prompt-sync')();

//entrada

let base = Number(entrada('Insira o dimensao do lado do quadrado:'));

//processamento
area = base * base ;

//saida
console.log("A area da figura (quadrado)e",area.toFixed(2),"." ) ;