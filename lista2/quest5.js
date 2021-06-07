const input = require(`prompt-sync`)();


//entrada
const numero1 = Number(input("Insira o primeiro numero"))
const numero2 = Number(input("Insira o segundo numero"))
const numero3 = Number(input("Insira o terceiro numero"))
//processamento
let numbers =[numero1,numero2,numero3]

numbers.sort((a,b) => a-b);




console.log(
    "Os numeros em ordem crescente sao respectivamente :",numbers
    )


   


