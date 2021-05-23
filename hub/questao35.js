const entrada = require('prompt-sync')();

// Entrada
const numero_inteiro = entrada('Insira um numero de 4 digitos: ');

// Processamento
digito1 = (numero_inteiro.charAt(0));
digito2 = (numero_inteiro.charAt(1));
digito3 = (numero_inteiro.charAt(2));
digito4 = (numero_inteiro.charAt(3));

dig4 = parseInt(digito4); 
dig3 = parseInt(digito3); 
dig2 = parseInt(digito2);
dig1 = parseInt(digito1);

somaD = (dig1 + dig2 + dig3 + dig4);

//saida
console.log("A somo dos elementos do seu numer inteiro :",numero_inteiro,"e equivalente a",somaD,);