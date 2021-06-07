const input = require(`prompt-sync`)();

function main(){

    //entrada

const numero1 = Number(input("Insira o primeiro numero"))
const numero2 = Number(input("Insira o segundo numero"))
const numero3 = Number(input("Insira o terceiro numero"))
const numero4 = Number(input("Insira o quarto numero"))
const numero5 = Number(input("Insira o quinto numero"))

//processamento
let maior = numero1
let menor = numero1

if (numero2 > maior){
    maior = numero2

}else if (numero2 < menor){
    menor = numero2
}
if (numero3 > maior){
    maior = numero3

}else if (numero3 < menor){
    menor = numero3
}
if (numero4 > maior){
    maior = numero4

}else if (numero4 < menor){
    menor = numero4
}
if (numero5 > maior){
    maior = numero5

}else if (numero5 < menor){
    menor = numero5
}




console.log(
    "Maior numero :",maior,"Menor numero : ",menor
    )


}
main()