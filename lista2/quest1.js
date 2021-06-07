const Input = require(`prompt-sync`)();

function main(){

      //entrada

const num1 = Number(Input("number1 :"));
const num2 = Number(Input("number2 :"));
const num3 = Number(Input("number3 :"));

     //processamento

if       (num1 === num2 && num2 === num3){
console.log(
      "Todos numero sao iguais"
      )

}else if (num1 !== num2 && num2 !== num3 && num3 !== num1){    
console.log(
      "todos diferentes"
      )}
      
else{console.log(
      "dois numeros iguais"
      )}
}
main()