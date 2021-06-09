const input = require('prompt-sync')()
function main(){
//entrada
const leituraAtual= Number(input("Insira a leitura atual ;"))
const leituraAntiga= Number(input("Insira a leitura antiga :"))

//functions
preçoTarifa(leituraAtual)
imposto(tarifa)
taxaIlu(tarifa,leituraAtual)

//processamento

const bandeiraAmarela1 = Math.trunc(leituraAtual/100)
const bandeiraAmarela2 = bandeiraAmarela1 * 8
const ValorFaturado = (leituraAtual + tarifa+ iluminação +pixConfis + icms + bandeiraAmarela2)


//saida
if(leituraAtual <= 30 ){
console.log(
    "insento de tarifas "
    )   
}
else if(leituraAtual > 30){
console.log(
    "Consumo :",leituraAtual,"Kwh"
    )
console.log(
    "Valor Faturado :",`R$${ValorFaturado}`
    )
console.log(
    "Bandeira :","R$",bandeiraAmarela2,"(", bandeiraAmarela1,"bandeiras",")"
    )
console.log(
    "ICMS :R$",icms
    )
console.log(
    "PIx/Confis : ",pixConfis
    )     
console.log(
    "Taxa de iluminação :R$",iluminação
)      
}
}
//processamento function1
function preçoTarifa(valor){ 
    if(valor <= 30){
        tarifa = 0
        return tarifa
    }else if(valor <= 100){
        tarifa = valor * 0.59
        return tarifa
    }else if(valor > 100){
        tarifa = valor * 0.75
        return tarifa
    }
}



//processamento function 2
function imposto(numero3){ 
    icms = 0.25 * numero3
    pixConfis = 0.15 * numero3
    return icms,pixConfis
    
    
    
}
//processamento function 3
function taxaIlu(numero1,numero2){

if(numero1 <= 80){
  iluminação = 0
return iluminação
}
else if(numero2 >80){
  iluminação = numero1 * 0.06  
return iluminação
}

}  

main()