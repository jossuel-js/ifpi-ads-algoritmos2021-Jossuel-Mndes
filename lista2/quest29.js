const input = require('prompt-sync')()

function main(){

    // Entrada
    
    const valor = input('Insira um valor de 4 digitos')

    // Processamento
    
    const parte1 = valor.charAt(0)
    const parte2 = valor.charAt(1)
    const parte3 = valor.charAt(2)
    const parte4 = valor.charAt(3)
    
    const parte12 = parte1 + parte2
    const parte34 = parte3 + parte4

    const valor1 = parseInt(valor)
    const raiz = Math.sqrt(valor1)
    
    if (raiz == parseInt(parte12) + parseInt(parte34)){
        console.log(                  //saida1
            "É uma quadrado perfeito"
            )
    }else{
        console.log(                 //saida2
            "Não é um quadrado perfeito"
            )
    }
}

main()