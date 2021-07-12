const input = require('prompt-sync')()
function main(){
var frase = input("insira as horas/minutos/segundos no formato hh:mm:ss ")
var tamanho = frase.length
var hora =""
var minuto =""
var segundo=""
var i = 0

while(frase[i]!= ":"){
    
    hora+=frase[i]
    i++
}
i++
while(frase[i]!= ":"){
    
   minuto+=frase[i]
    i++
}  
i++
while(frase[i]<tamanho){
    
    segundo+=frase[i]
    i++
}  
console.log(` ${hora} Hora/s ${minuto} minuto/s e ${segundo} segundos`)
} 
main()