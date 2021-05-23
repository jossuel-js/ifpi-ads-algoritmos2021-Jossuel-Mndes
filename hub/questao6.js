const entrada = require('prompt-sync')();

//entrada

let velocidade_km = Number(entrada('Velocidade (km/h)'));

//processamento
velocidade_ms = velocidade_km / 3.6;

//saida
console.log('A velocidade',velocidade_km,'em km');
console.log('é igual a', velocidade_ms.toFixed(0),'m/s');
