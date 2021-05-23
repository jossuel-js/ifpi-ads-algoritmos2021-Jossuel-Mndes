const entrada = require('prompt-sync')();

// Entrada
const numero_inteiro = (entrada('Insira um numero inteiro de 3 digitos: '))

// Processamento
var digito1 = (numero_inteiro.charAt(0));
var digito2 = (numero_inteiro.charAt(1));
var digito3 = (numero_inteiro.charAt(2));

numero_inverso = (digito3 + digito2 + digito1);
subtra = parseInt(numero_inteiro) - parseInt(numero_inverso);

//saida
console.log("A subtração do numero inteiro pelo seu inverso e : ",subtra,);