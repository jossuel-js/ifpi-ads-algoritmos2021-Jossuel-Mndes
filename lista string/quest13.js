const input = require('prompt-sync')()

function main(){

    
    const nome = input("Insira seu nome completo : ")

    
    let split = nome.split(" ")
    let começo = split[split.length - 1]
    let iniciais = ""


    for(var i = 0;i<split.length-1;i++){

    iniciais+= "."+(split[i].charAt(0))

    }
    
    
    console.log(`${começo}${iniciais.toUpperCase()}`)
}

main()