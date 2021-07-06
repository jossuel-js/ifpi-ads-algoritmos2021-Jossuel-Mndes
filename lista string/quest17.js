const input = require('prompt-sync')()
function main(){
var frase = input("insira a data no formato texto,13,10 ")
var tamanho = frase.length
var texto = ""
var caractereI=""
var caractereF=""
var i =0
var final=""

while(frase[i]!= ","){
    
   texto+=frase[i]
    i++
}
i++
while(frase[i]!= ","){
    
   caractereI+=frase[i]
    i++
}  
i++
while(frase[i]<tamanho){
    
    caractereF+=frase[i]
    i++
}  
for(var t=(Number(caractereI)-1);t<caractereF;t++){
final=final+frase[t]
}
console.log(final)
}
main()