const Input = require('prompt-sync')()

function main(){
//entrada
const angulo = Number(Input("insira o angulo :"))
//processamento
if(angulo >= 0 && angulo <= 90){
console.log(
    "O angulo esta no primeiro quadrante"
    )
}
if(angulo >= 91 && angulo <= 180){
console.log(
    "O angulo esta no segundo quadrante"
    )
}
if(angulo >= 181 && angulo <= 270){
console.log(
    "O angulo esta no terceiro quadrante"
    )
}
if(angulo >= 271 && angulo <= 360){
console.log(
    "O angulo esta no terceiro quadrante"
    )
}
else if(angulo < 0 && angulo > 360){
console.log(
    "O angulo nao e permitido "
    )
}


}
main()