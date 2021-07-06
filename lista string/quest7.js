const input = require('prompt-sync')()

function main(){


const verbo = input("Insira o verbo regular terminado em er : ")
var tamanho = verbo.length
var metade1= verbo.split('er')
var corte = metade1.slice(0, -1)
var verboP = corte+"o"

console.log("")
console.log("Seu verbo alocado para o tempo do presente fica da seguinte forma : ")
console.log(verboP)

}
main()