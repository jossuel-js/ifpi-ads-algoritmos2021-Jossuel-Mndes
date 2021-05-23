const entrada = require('prompt-sync')()

//entrada
entrada("Calculador base de triangulos")
const base = Number(entrada('Insira a base:/'));


const alt = Number(entrada('Insira a altura(h):/'));

//processamento
base1 = base
altura = alt;

area = (altura * base1 / 2);

//saida
console.log("A area da figura(triangulo)e equivalente a:",area.toFixed(2),".");