const input = require('prompt-sync')()
function main(){
var frase = input("insira a data no formato DD/MM/AAAA: ")
var tamanho = frase.length
var dia =""
var mes =""
var ano =""
var i = 0
var Mextenso =""
while(frase[i]!= "/"){
    
    dia+=frase[i]
    i++
}
i++
while(frase[i]!= "/"){
    
    mes+=frase[i]
    i++
}  
i++
while(frase[i]<tamanho){
    
    ano+=frase[i]
    i++
}  

if (mes=="1"||mes=="01") {
     Mextenso += "janeiro"
}
if (mes=="2"||mes=="02") {
    Mextenso += "fevereiro"
}
if (mes=="3"||mes=="03") {
    Mextenso += "março"
}
if (mes=="4"||mes=="04") {
    Mextenso += "abril"
}
if (mes=="5"||mes=="05") {
    Mextenso += "maio"
}
if (mes=="6"||mes=="06") {
    Mextenso += "junho"
}
if (mes=="7"||mes=="07") {
    Mextenso += "julho"
}
if (mes=="8"||mes=="08") {
    Mextenso += "agosto"
}
if (mes=="9"||mes=="09") {
    Mextenso += "Setembro"
}
if (mes=="10") {
    Mextenso += "Outubro"
}
if (mes=="11") {
    Mextenso += "Novembro"
}
if (mes=="12") {
    Mextenso += "Dezembro"
}

console.log(`${dia} de ${Mextenso} de ${ano}`)

}
main()