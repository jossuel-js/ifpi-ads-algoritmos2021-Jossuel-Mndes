const input = require('prompt-sync')()
function main(){
var frase = input("insira uma frase: ")
var inverso = ""


for (let i = frase.length - 1; i >= 0; i--){
    inverso = inverso + frase[i]
    }

    if (frase==inverso) {
        console.log("E um palindroma")
    }
}
main()