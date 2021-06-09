const input = require('prompt-sync')()
function main(){

    //entrada
const valor1 = Number(input("Insira o primeiro valor"))
const valor2 = Number(input("Insira o segundo  valor"))
const valor3 = Number(input("Insira o terceiro valor"))
 //processamento
const score1 = (valor1*2.6)+(valor2*5.7)+(valor3*1.7)/ 10
const score2 = (valor1*6.2)+(valor2*1.9)+(valor3*1.9)/10
//funtions
scoreUm(score1)
scoreDois(score2)
//saida
console.log(
        "        ||||||||||score 1 |||||||||||||||            "
    )
console.log(
    `Sua pontuação foi de ${score1} pontos ,a categoria da sua pontuação e :${faixa}`
    )
    console.log("")
    console.log(
        "        ||||||||||score 2 |||||||||||||||            "
    )
console.log(
    `Sua pontuação foi de ${score2} pontos,a categoria da sua pontuação e :${faixa2}`
    )

//score1 processamento
function scoreUm(numero){ 
     if(numero >= 800 && valor1 <= 1000){
        faixa = "Muito bom"
        return faixa
    }else if(numero >= 600 && valor1 < 800){
        faixa = "Bom"
        return faixa
    }else if(numero >= 400 && valor1 < 600){
        faixa = "Regular"
        return faixa
    }else if(numero >= 0 && valor1 < 400){
        faixa= "Baixo"
        return faixa
    }
}
//score2 processamento
function scoreDois(numero2){ 
    if (numero2 > 701 && valor2 <= 1000){
        faixa2 = "Muito bom"
        return faixa2
    }else if(numero2 > 501 && valor2 < 700){
        faixa2 = "Bom"
        return faixa2
    }else if(numero2 > 301 && valor2 < 500){
        faixa2 = "Regula"
        return faixa2
    }else if(numero2 >= 0 && valor2 < 300){
        faixa2 = "Baixo"
        return faixa2

}
}
}
main()