const input = require(`prompt-sync`)();

function main(){

const dia = Number(input("dias"))
const mes = Number(input("meses"))
const anos = Number(input("anos"))

//processamento
if (dia < 30){
    console.log(
        "o numero de dias e:",dia
        )
}else if(dia >= 30)
    console.log(
        "A data nao e valida"
        )
if(mes <= 12){
console.log(
    "O numero de meses e:",mes
    )
}
else if (mes > 12){
    console.log(
        "A data nao e valida"
        )
}
if(anos >0){
    console.log(
        "A data em anos e :",anos
        )
}
else if(anos < 0){
    console.log(
        "A data nao e aceita"
        )
}

}


main()