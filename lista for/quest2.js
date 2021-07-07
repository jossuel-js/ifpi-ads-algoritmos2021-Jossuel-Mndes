const input = require ('prompt-sync')()

function main(){

const N = Number(input("insira o numero desejado : "))
console.log("lista dos divisores atuais pares " )

for(let atual = 0; atual <= N;atual++){
if(atual%2 == 0){

console.log(atual)

}

}



}
main()