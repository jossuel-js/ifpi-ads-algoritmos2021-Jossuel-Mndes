const Input = require('prompt-sync')()

function main(){
//entrada
const number1 = Number(Input("Insira seu numero com parte fracionaria"))
//processamento
const parteFra = Math.round(number1)
//saida
console.log("Seu numero arredondado fica :",parteFra)








}
main()