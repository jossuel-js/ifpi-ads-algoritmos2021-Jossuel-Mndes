const input = require('prompt-sync')();
function main(){
//entrada
const peso = Number(input("'Insira seu peso'"))
const altura = (input("'Insira sua altura'"))
//processamento
const altChar = (altura.charAt(0));
const alturaM = parseInt((altChar * 100))
const alturaCm = parseInt(altura % 100)
const alturaG = alturaM + alturaCm

const altura2= Math.pow((alturaG),2)
const imc = ((peso / altura2))


console.log(
    "Seu imc e :",imc.toFixed(4)
    )
if(imc < 0.0025){
console.log(
    "Seu peso esta normal"
    )
}
else if(imc =>0.0025 && imc <= 0.0030){
console.log(
    "Voce esta obeso"
    )
}
if(imc >0.0030){
console.log(
    "Voce esta com obesidade morbida"
    )
}
}
main()