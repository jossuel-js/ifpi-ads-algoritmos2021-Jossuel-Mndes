const Entrada = require('prompt-sync')()

// Entrada
var saque = Number(Entrada('Insira o valor do saque em R$: '))

// Processamento
let r$50 = 50
let r$10 = 10
let r$5 = 5
let r$1 = 1

r$50 = saque / 50
saque = saque % 50
  
r$10 = saque / 10
saque = saque % 10
  
r$5 = saque / 5
saque = saque % 5
   
r$1 = saque / 1
saque = saque % 1

//saida
console.log((r$50),'notas de 50 reais,',(r$10),'notas de 10 reais,',(r$5),'notas de 5 reais,',(r$1),'notas de 1 real.')