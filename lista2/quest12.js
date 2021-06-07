const input = require(`prompt-sync`)();

function main(){
//entrada
const numeroR = Number(input("Insira numero real"))  
//processamento
if (numeroR % 2 === 0){
console.log(
    "O numero e par"
    )
}
else{console.log(
    "O numero e impar"
    )}





}

main()