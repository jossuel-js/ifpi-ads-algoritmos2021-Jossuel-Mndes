const entrada = require('prompt-sync')();

//entrada
let salario = Number(entrada('calculo aumento salarial:'));

//processamento
aumento = salario  * 25/100 ;
salarioNovo = salario + aumento

//saida
console.log("Seu novo salario e:",salarioNovo);
