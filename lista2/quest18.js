const Input = require('prompt-sync')()

function main(){
//entrada
const numero1 = Number(Input("numero 1 :"))
const numero2 = Number(Input(" numero 2 :"))
const operação = Number(Input(" operação :"))
//processamento
const adiçao = numero1 + numero2
const subtração = numero1 - numero2
const multiplicação = numero1 * numero2
const divisão = numero1 / numero2


if(operação === 1){
console.log(
    "O resultado da operação e :",adiçao
    )
}
if(operação === 2){
    console.log(
        "A operação escolhida foi subtração"
        )
    console.log(
        "O resultado da operação e :",subtração
        )
}
if(operação === 3){
    console.log(
        "O resultado da operação e :",multiplicação
        )
}
if(operação === 4){
    console.log(
        "O resultado da operação e :",divisão
        )
}
}


main()