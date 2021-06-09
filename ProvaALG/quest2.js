const input = require('prompt-sync')()
function Main(){
//entrada
const nome = (input("Insira identificaçao do funcionario :"))
const ValueSales = Number(input("Insira o valor das suas vendas :"))
const salario = 1100
//processamento
comissão1 = (ValueSales - 5000) * 0.05
comissão2 = (ValueSales - 10000) * 0.10
comissão3 = (ValueSales * 0.20)
//saida
if(ValueSales <= 5000){
 console.log(
    `Funcionario ${nome} voce não atingiu a meta para recebera comissão .`
)
return console.log(
    `Seu salario e de R$${salario}`
    )
}if(ValueSales >5000 && ValueSales <= 10000){
 console.log(
    `Funcionario ${nome} Seu salario e de R$${salario + comissão1}.`
    )
    console.log(
        "Sua comissão foi de : "`R$${comissão1}`
        )


}else if(ValueSales >10000 && ValueSales <= 30000){
    console.log(
    `Funcionario ${nome} Seu salario e de R$${salario + comissão2 + 250}.`
    )//250 == maior comissão possivel de ser recebida na faixa de 5k a 10k
    console.log(
        "Sua comissão foi de :" ,(comissão1 + 250)
        )
}else{
    console.log(
        `Funcionario ${nome} Seu salario e de R$${salario + comissão3}.`
        )
    console.log(
        `Sua comissão foi de :${comissão3}.`
        )
} 
    




}
Main()