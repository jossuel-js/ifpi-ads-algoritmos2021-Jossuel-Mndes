const entrada = require('prompt-sync')()

//entrada
console.log("Calculador base de retangulos")
const base = Number(entrada('Insira a base:/'));
const alt = Number(entrada('Insira a altura(h):/'));

//processamento
base1 = base
altura = alt;
area = altura * base1;

//saida
console.log("A area da figura(retangulo)e igual a:",area.toFixed(2),".")