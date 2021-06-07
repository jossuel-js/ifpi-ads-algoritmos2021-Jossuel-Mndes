const input = require('prompt-sync')()

function main(){

    // Entrada
    
    const areaX = Number(input("Ax --> "))
    const areaY = Number(input('Ay --> '))
    const baseX = Number(input('Bx --> '))
    const baseY= Number(input('By --> '))

    // Processamento
    const alt = areaX - areaY
    const base = baseY - baseX
    const area = (base * alt) / 2

    if(area > 0){
        console.log(
            "O valor da área do retângulo é ",area
            )
    
    }else{
        console.log(
            "Nao existe area = 0 ou menor "
            )
    }

}

main()