const { media,menor,maior,Positivo,Negativo,repetidos } = require('./quest6aux')

const input = require('prompt-sync')()
function main(){

const ordem = Number(input("Insira a ordem"))
const vetor = Array(ordem)
//processamento

for(i=0;i<vetor.length;i++){
vetor[i] =Number(input(`elemento${i} :`))
}

let mediaV = media(vetor)
let maiorV = maior(vetor)
let menorV = menor(vetor)
let PositivoV = Positivo(vetor)
let NegativoV = Negativo(vetor)
let repetidoV = repetidos(vetor)

console.log(`Média dos valolres = ${mediaV}`)
console.log(`Maior valor: ${maiorV} `)
console.log(` Menor valor: ${menorV}`)
console.log(`${PositivoV} números positivos `)
console.log(`${NegativoV} números negativos`)
if(repetidoV === true){
    console.log(`Possui valores repetidos`)
}else if(repetidoV === false){
    console.log(`Sem valores repetidos`)
}

}
main()