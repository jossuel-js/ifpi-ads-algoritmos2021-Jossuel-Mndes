const entrada = require('prompt-sync')()


const numero = Number(entrada('Insira sua 1° nota:/'));


const numero1 = Number(entrada('Insira sua 2° nota:/'));


const numero2 = Number(entrada('Insira sua 3°nota:/'));

//processamento
num = numero;
num1 = numero1;
num2 = numero2;
media1 = num * 1;
media2 = num1 * 2;
media3 = num2 * 3;
mediaP = (media1 + media2 + media3) / 5;

//saida
console.log("A resultante das suas notas em media ponderada e: ",mediaP.toFixed(1),".");


