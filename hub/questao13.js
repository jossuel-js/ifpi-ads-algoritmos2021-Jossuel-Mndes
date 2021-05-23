const entrada = require('prompt-sync')()

//entrada
let salario = Number(entrada("Insira seu salario :"))

//processamento
novo_salario = salario * 0.70;

//saida
console.log("Seu novo salario e :/",(novo_salario).toFixed(1),".")