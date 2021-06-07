const Input = require('prompt-sync')()
function main(){
//entrada
    const lado1 = Number(Input("Insira o primeiro lado :  "))
    const lado2 = Number(Input("Insira o segundo lado  :  "))
    const lado3 = Number(Input("Insira o terceiro lado :  "))
    //processamento
if(lado1 <( lado2 + lado3 )||lado2 <( lado1 + lado3 )||lado3 <( lado2 + lado1 )){
console.log("E um triangulo")
}else{
console.log("nao e um triangulo")
}

if(lado3 >lado2 && lado3 >lado1){
    console.log("lado3 e a hipotenusa e lado 1 e 2 sao os catetos")
}
if(lado2 >lado1 && lado2 >lado3){
    console.log("lado2 e a hipotenusa e lado 1 e 3 sao os catetos")
}
if(lado1 >lado2 && lado1 >lado3){
    console.log("lado1 e a hipotenusa e lado 2 e 3 sao os catetos")
}



}
main()