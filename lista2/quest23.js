const Input = require('prompt-sync')()
function main(){
//entrada
const diaAtual = Number(Input("Insira o dia atual"))
const mesAtual = Number(Input("Insira o mes atual"))
const anoAtual = Number(Input("Insira o ano atual"))

const dia1 =  Number(Input("Insira o dia desejado"))
const mes1 =  Number(Input("Insira o mes desejado"))
const ano1 =  Number(Input("Insira o ano desejado"))

const dia2 =  Number(Input("Insira o 2 dia desejado"))
const mes2 =  Number(Input("Insira o 2 mes desejado"))
const ano2 =  Number(Input("Insira o 2 ano desejado"))
//processamento
const anoR1 = ano1 - anoAtual
const anoR2 = ano2 - anoAtual

const mesR1 = mes1 - mesAtual
const mesR2 = mes2 - mesAtual

const diaR1 = dia1 - diaAtual
const diaR2 = dia2 - diaAtual


if(anoR1 < anoR2)
{
return console.log(
    "       A data 1 e mais recente       "
    )
}
else if(anoR1 >anoR2){
return console.log(
    "       A data 2 e mais recente        "
    )
}
else{
console.log("                                             ")
console.log(   
"    A diferença de anos sao iguais sera analizados os meses    "
)
console.log("                                             ")


}if(mesR1 < mesR2){
return console.log(
    "        A data 1 e mais recente       "
    )
}
else if(mesR1 > mesR2){console.log("                      ")
return console.log(
    "        A data 2 e mais recente       "
    )
}
else{
    console.log(
"    Os meses sao iguais sera analizado os dias             "
        )
}if(diaR1 < diaR2){
return console.log(
    "        A data 1 e mais recente          "
    )
}
else if(diaR1 > diaR2){
return console.log(
    "        A data 2 e mais recente        "
    )
}
else{
    console.log(
        "As datas sao iguais portano ambas sao a mais recente ")
}


}
main()