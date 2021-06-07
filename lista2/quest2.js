const input = require(`prompt-sync`)();

function main(){

    //entrada

const numero1 = Number(input("Insira o primeiro numero"))
const numero2 = Number(input("Insira o segundo numero"))
 
//processamento

let maior = numero1
let menor = numero1

if (numero2 > maior){
    maior = numero2

}else if (numero2 < menor){
    menor = numero2
}
console.log(
    "O menor numero e :",menor,"O maior numero e : ",maior
    )


}
main()