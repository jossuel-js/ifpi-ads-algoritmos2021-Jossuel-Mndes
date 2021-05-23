const entrada = require('prompt-sync')();

//entrada
let minuto = Number(entrada('minutos:'));

//processamento
hora = Math.trunc( minuto / 60.);
minutoF = minuto % 60;


//saida
console.log("/",minuto,'minutos');
console.log('é igual a',hora,'horas e',minutoF,'minutos');


