const input = require(`prompt-sync`)();

function main(){

//entrada
const numero1 = Number(input("Insira o primeiro numero"))
const numero2 = Number(input("Insira o segundo numero"))
const numero3 = Number(input("Insira o terceiro numero"))

 //processamento
 
let maior = numero1
let menor = numero1

if (numero2 > maior){
    maior = numero2
}

if (numero3 > maior){
maior = numero3

}
console.log(
    "O maior numero e : ",maior
    )

}
main()