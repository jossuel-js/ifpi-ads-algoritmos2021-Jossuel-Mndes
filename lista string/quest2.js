const input = require('prompt-sync')()
function main(){
var frase = input("insira uma frase: ")
var letras = frase.length
var i =0
while(i<letras) {
console.log(frase[i])

    i++
}
}
main()