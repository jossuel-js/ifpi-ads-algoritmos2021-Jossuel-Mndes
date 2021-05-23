const entrada = require('prompt-sync')()

// Entrada
const numero_inteiro = entrada('Insira um numero inteiro de 3 digitos: ')

// Processamento
const digito1 = (numero_inteiro.charAt(0))
const digito2 = (numero_inteiro.charAt(1))
const digito3 = (numero_inteiro.charAt(2))

const numero_inverso = (digito3 + digito2 + digito1)

// Saída
console.log('O inverso do numero ',numero_inteiro,'é',numero_inverso)