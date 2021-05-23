
const entrada = require('prompt-sync')();

//entrada

let velocidade_ms = Number(entrada('Velocidade (m/s)'));

//processamento
velocidade_km = velocidade_ms * 3.6;

//saida
console.log('A velocidade',velocidade_ms,'ms');
console.log('é igual a', velocidade_km,'km');





