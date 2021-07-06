const input = require('prompt-sync')()

function main(){

    // Entrada
    const string = input('Insira uma palavra: ')

    let texto = ''
    let espace = ' '
    
    for(let i = 1; i <= 20; i++){
        texto = texto + espace
    }
    console.log(texto,string) 
}

main()