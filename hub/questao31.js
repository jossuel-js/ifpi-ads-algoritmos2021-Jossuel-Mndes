const entrada = require('prompt-sync')()

// Entrada
const numero_inteiro = entrada('Insira um numero binario de 4 digitos: ')

// Processamento
digito1 = (numero_inteiro.charAt(0))
digito2 = (numero_inteiro.charAt(1))
digito3 = (numero_inteiro.charAt(2))
digito4 = (numero_inteiro.charAt(3))

dig4 = parseInt(digito4) * 1 
dig3 = parseInt(digito3) * 2
dig2 = parseInt(digito2) * 4
dig1 = parseInt(digito1) * 8

somaD = (dig1 + dig2 + dig3 + dig4)

//saida
console.log("O numero binario inserido e igual a :",somaD,"na base decimal")




