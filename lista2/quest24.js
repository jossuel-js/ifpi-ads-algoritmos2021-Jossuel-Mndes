const Input = require(`prompt-sync`)();

function main(){
//entrada
const coeficienteA = Number(Input("Insira o coeficiente A da expressao do 2 grau : "))
const coeficienteB = Number(Input("Insira o coeficiente B da expressao do 2 grau : "))
const coeficienteC = Number(Input("Insira o coeficiente C da expressao do 2 grau : "))
//processamento
const delta = Math.pow((coeficienteB),2) - (4 * coeficienteA * coeficienteC)
const equaçãoMA = ((-1 * coeficienteB) + delta) / (coeficienteA * 2)
const equaçãoME = ((-1 * coeficienteB) - delta) / (coeficienteA * 2)

if(coeficienteA === 0){
    console.log(
"Uma equação do segundo grau nn pode ter o coeficiente A = 0"
    )
}
else{
    console.log('As raizes da equação sao :',equaçãoMA,"e tambem :",equaçãoME)
}



}
main()