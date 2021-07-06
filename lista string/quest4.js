const input = require('prompt-sync')()
function main(){
var frase = input("insira uma frase: ")
var letras = frase.length
var i =0
var newFrase = ""

while(i<letras) {
newFrase+=frase[i]+frase[i]

    i++
}
console.log(newFrase)
}
main()