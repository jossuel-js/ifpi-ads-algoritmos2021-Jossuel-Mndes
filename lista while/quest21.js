const input = require('prompt-sync')()
function main(){

var num1 = Number(input("Insira primeiro numero"))
var num2 = Number(input("Insira segundo numero"))
var i = 0
var resultado = 0
while  (num1 > i){

resultado = resultado + num2
i++
}
console.log(resultado)
}
main()