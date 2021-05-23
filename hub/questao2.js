const entrada = require('prompt-sync')();

//entrada

let hora = Number(entrada('hora:'));

//processamento
minuto = hora * 60.0 ;

//saida
console.log("/",hora,'horas');
console.log('é igual a',minuto,'minutos');
