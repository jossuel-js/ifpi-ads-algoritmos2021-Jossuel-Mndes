const input = require('prompt-sync')()

function main(){
     var nome = input("Insira seu nome : ")

    // Processamento
    let split = nome.split(' ')
    let maximo = split.length -1
    let representação = `${split[0]} ${split[maximo]}`

    // Saída
    console.log(representação)
}

main()