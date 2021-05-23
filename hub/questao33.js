const input = require('prompt-sync')()

// Entrada
const numero_inteiro = (input('Insira um numero inteiro de 3 digitos: '))

// Processamento
 digito1 = (numero_inteiro.charAt(0))
 digito2 = (numero_inteiro.charAt(1))
 digito3 = (numero_inteiro.charAt(2))

numero_inverso = (digito3 + digito2 + digito1)
soma = parseInt(numero_inteiro) + parseInt(numero_inverso)


//saida
console.log("A soma do numero inteiro pelo seu inverso e : ",soma,)