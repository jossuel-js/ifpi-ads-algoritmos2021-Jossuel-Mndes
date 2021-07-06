const input = require('prompt-sync')()

function main(){
    var frase = input("Insira a frase no formato (5,frase)")
    var split =frase.split(",")
    var tamanho=split.length
    var começo =split[tamanho-1]
    var linhas=Number(split[0])
    var i =0
    
    while(i<linhas){
    console.log(" ")
   i++
}
   console.log(começo)
}
    main()