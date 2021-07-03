const input = require('prompt-sync')()
function main(){

const numA = Math.trunc(Math.random()*101)
var palpite = Number(input("Insira palpite : "))
var i = 1

while(palpite != numA){

           if(palpite > numA){

console.log("O palpite e maior que o numero. ")

           }else if(palpite<numA){

console.log("O palpite e menor que o numero. ")
}
   
var palpite = Number(input("Insira palpite"))
i++
}
console.log("O numero de palpites foram : ",i)


}
main()