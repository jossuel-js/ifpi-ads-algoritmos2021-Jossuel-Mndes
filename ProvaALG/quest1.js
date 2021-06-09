const input = require('prompt-sync')()
function main(){
    // entrada 
const mediaCurrent = Number(input("Insira a media atual dos casos de covid : "))
const medPast = Number(input("Insira a media de 14 dias atras dos casos de covid : "))
    // processamento
const variação = (mediaCurrent - medPast) //variação em numero
const variação1 = ((medPast + variação)* 100) / medPast // variação em porcentagem
//saida
if (variação1 >85 && variação1 < 115){
console.log(
    "As variaçoes nas medias do covid indicam estabilidade .  "
    )
}else if(variação <= 85 ){
console.log(
    "As variaçoes nas medias do covid indicam uma queda no numero de casos . "
    )
}else{
console.log(
    "As variaçoes nas medias do covid indicam um Alta no numero de casos . "
)
}



}
main()
