const entrada = require('prompt-sync')();

//entrada

let num = Number(entrada('Insira o primeiro numero (Divisor)= '));

 
let num1 = Number(entrada('Insira o segundo numero (Dividendo)= '));

//processamento
numero = num ;
numero1 = num1;

quociente = num / num1 ;
resto = num % num1 ;

//saida
console.log("O quociente e:/",quociente,".");
console.log("O resto e:/",resto,".");