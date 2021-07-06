const input = require('prompt-sync')()

function main(){

    var texto = input("Insira o texto: ")
    var palavra= input("Qual a palavra desejada : ")
    var newP = input("insira a nova palavra :")
    
    let split = texto.split(" ")
    let textoF = ""


    for(var i = 0;i<=split.length-1;i++){

    if (split[i]=== palavra ){
        
        split[i]= newP
    }
   textoF+=" "+split[i]
    }
    console.log(textoF)
    
}
main() 