const input = require("prompt-sync")();

function main(){
const dataD = Number(input("insira data dias"))
const dataM = Number(input("insira data mes"))
const dataA = Number(input("insira data anos"))

const dataND = Number(input("insira data nascimento  dias"))
const dataNM = Number(input("insira data nascimento  mes"))
const dataNA = Number(input("insira data nascimento anos"))

const resultDia = dataD - dataNA
const resultMes = dataM - dataNM
const resultAno = dataA  - dataNA

console.log(
    "Sua idade exata e : ","Dias: ",resultDia,"Meses: ",resultMes,"Anos : ",resultAno 
    )














}
main()