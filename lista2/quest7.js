const Input = require(`prompt-sync`)();

function main(){

      //entrada

const num1 = Number(Input("number1 :"));
const num2 = Number(Input("number2 :"));
const num3 = Number(Input("number3 :"));

     //processamento

if ((num1 +num2)>num3 || (num1 +num3)>num2 || (num2+num3)>1 ){
    console.log(
        "E um triangulo"
        )
}
if       (num1 === num2 && num2 === num3){
    console.log(
        "Todos lados sao iguais"
        )
}else if(num1 != num2 && num2!=num3 && num3!= num1){
    console.log(
        "E um triangulo escaleno"
        )
}

else{console.log(
    "dois lados iguais,e um triangulo isoceles"
    )}
}
main()