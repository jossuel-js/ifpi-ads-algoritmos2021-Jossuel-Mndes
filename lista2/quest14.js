const input = require('prompt-sync')()
function main(){
//entrada
const number1 = Number(input("insira numero"))
const number2 = Number(input("insira numero"))
const number3 = Number(input("insira numero"))
const number4 = Number(input("insira numero"))
const number5 = Number(input("insira numero"))

//processamento
const media = ((number1 +number2 +number3 +number4 + number5) / 5 )

if(number1 > media){
console.log(
    "O numero 1",number1,"e maior que a media "
    )
}
if(number2 > media){
console.log(
    "O 2 numero ",number2,"e maior que a media "
    )
}
if(number3 > media){
console.log(
    "O 3 numero ",number3,"e maior que a media "
    )
}
if(number4 > media){
console.log(
    "O 4 numero ",number4,"e maior que a media "
    )
}
if(number5 > media){
console.log(
    "O 5 numero ",number5,"e maior que a media "
    )
}

}
main()