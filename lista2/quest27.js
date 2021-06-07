const Input = require('prompt-sync')()
function main(){
//entrada
const anoNas = Number(Input("Insira o ano nascimento"))
const mesNas = Number(Input("Insira o mes nascimento"))
const diaNas = Number(Input("Insira o dia nascimento"))

const ano = Number(Input("Insira o ano atual"))
const mes = Number(Input("Insira o mes atual"))
const dia = Number(Input("Insira o dia atual"))
//processamento
const anoR = ano - anoNas
const mesR = mes - mesNas
const diaR = dia - diaNas

console.log("voce tem exatamente :",anoR,"anos,",mesR,"meses","e",diaR,"dias de vida.")





}
main()
