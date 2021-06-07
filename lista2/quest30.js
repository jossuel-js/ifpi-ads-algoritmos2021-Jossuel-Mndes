const input = require('prompt-sync')()

function main(){

    // Entrada
    
    const number = input("Insira um valor entre 1000 e 9999 : " )

    // Processamento

    const casa1 = number.charAt(0)
    const casa2 = number.charAt(1)
    const casa3 = number.charAt(2)
    const casa4 = number.charAt(3)

    const charat12 = casa1 + casa2
    const charat23 = casa3 + casa4

    const operação = parseInt(charat12) + parseInt(charat23) 

    if (number == Math.pow(operação, 2)){
        console.log(                              //saida1
            "Esse número obedece a caracteristica"
            )
    }else{
        console.log(                             //saida2
            "Esse numero não obedece a caracteristica"
            )
    }
}

main()