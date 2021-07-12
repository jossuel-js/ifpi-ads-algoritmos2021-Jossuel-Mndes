const input = require('prompt-sync')()

function main(){

    // Entrada
    const compra = Number(input('Valor da compra: R$ '))
    const diasReceber = Number(input('Deseja receber o pagamento em quantos dias?(2,14,31) '))
    let tipo = Number(input('Qual a foram de pagamento? (1=Crédito,2=A vista) '))
    let taxa = 0
    let valorL = 0
    
    //  PROCESSAMENTO

    while(tipo > 0){
        //PAGAMENTO NO CARTAO
        if(tipo === 1){
            let parcelas = Number(input('Quantas parcelas? (Max 12x) '))
            let percentual_parcelas = ((parcelas)/100) * compra
            //
                if(diasReceber <= 2){
                    taxa = (4.99/100) * compra + 0.40
                    valorL = compra - taxa - percentual_parcelas
                }else if(2 < diasReceber <= 14){
                    taxa = (3.99/100) * compra + 0.40
                    valorL === compra - taxa - percentual_parcelas
                }else if(14 < diasReceber <= 31){
                    taxa = (2,99/100) * compra + 0.40
                    valorL = compra - taxa - percentual_parcelas
                }
                
                // SAIDA1
                console.log("##################################")
                console.log(`Valor da compra R$ ${compra}`)
                console.log(`Foma de pagamento: Crédito dividido em ${parcelas}x`)
                console.log(`Taxa gateway R$ ${taxa.toFixed(0)}`)
                console.log(`Valor liquido r$ ${valorL}`)
                console.log(`Quantidade de dias para receber ${diasReceber} dias`)
                
                break
            }
            //PAGAMENTO A VISTA
        else if(tipo === 2){
            
                if(diasReceber <= 2){
                    taxa = (4.99/100) * compra + 0.40
                    valorL = compra - taxa
                }else if(2 < diasReceber <= 14){
                    taxa = (3.99/100) * compra + 0.40
                    valorL = compra - taxa
                }else if(14 < diasReceber <= 31){
                    taxa = (2,99/100) * compra + 0.40
                    valorL = compra - taxa
                }
            
                // SAIDA2
                console.log("############################")
                console.log(`Valor da compra R$ ${compra}`)
                console.log(`Foma de pagamento: A vista`)
                console.log(`Taxa gateway R$ ${taxa.toFixed(0)}`)
                console.log(`Valor liquido r$ ${valorL}`)
                console.log(`Quantidade de dias para receber ${diasReceber}`)
            
            break
        }//INVALIDAMENTO DO CODIGO CASO NAO ATENDA AS CONDIÇOES
        else{
            console.log('Insira um valor válido')
            tipo = Number(input('Qual a forma de pagamento? (1=Crédito,2=A vista) '))
        }
    
            



}

}
main()
