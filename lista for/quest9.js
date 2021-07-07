const input = require('prompt-sync')()
function main(){


var numFixo = Number(input("insira o numero desejado : "))
const limiteSuperior = Number(input("insira o limite superior : "))
const limiteInferior = Number(input("insira o limite inferior> "))

for(let i=limiteInferior;i<limiteSuperior;i++){

if(i%2 == 0){

 console.log(i)
}


}






}
main() 