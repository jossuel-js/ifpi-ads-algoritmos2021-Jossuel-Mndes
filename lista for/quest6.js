const input = require ('prompt-sync')()

function main(){
var numTabuada = Number(input("insira o numero"))
console.log(`A tabuada do numero ${numTabuada} e : `)

for(let i=0;i<=10;i++){
console.log(numTabuada * i)

}
}
main()    