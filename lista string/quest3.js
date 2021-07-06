const input = require('prompt-sync')()
function main(){
var frase = input("insira uma frase: ")
var letras = frase.length
var i =0
var novaF =""
while(i<letras) {
if (frase[i]==" ") {
    novaF+=""
}
else if(frase[i]!=" "){
    novaF+=frase[i]
}
    i++
}
console.log(novaF)
}
main()