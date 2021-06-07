const Input = require('prompt-sync')()

function main(){
//entrada
const salarioP1 = Number(Input("horario de aulas do professor 1 :"))
const salarioP2 = Number(Input("horario de aulas do professor 2 :"))

const horaAula1 = Number(Input("valor da hora aula professor 1"))
const horaAula2 = Number(Input("valor da hora aula professor 2"))

//processamento

const resultP1 = (salarioP1 * horaAula1)
const resultP2 = (salarioP2 * horaAula2)



if(resultP1 > resultP2){
console.log(
    "O professor 1 recebe o maior salario no valor de :","R$,",resultP1,",00")
}
else{
    console.log(
        "O professor 2 recebe o maior salario no valor de :","R$",resultP2,",00")
}
}
main()