const input = require('prompt-sync')()

function main(){


    var numero = Number(input("Insira o numero N para ser verificado : "))
    var quadrado = 0

    for(var i = 0; Math.pow(i, 2) <= numero; i++){
        quadrado = i
    }

    console.log(quadrado) 
}
main()