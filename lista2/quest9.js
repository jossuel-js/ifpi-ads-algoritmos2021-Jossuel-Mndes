const input = require(`prompt-sync`)();

function main(){

      //entrada
exibiNumerosPrimos(100);
//processamento
function exibiNumerosPrimos(limite){
        for(let numero = 2;numero <= limite; numero++){
              let eeprimo = true;
        
        for(let divisor = 2;divisor< numero; divisor++){
              if(numero % divisor === 0){
                    eeprimo = false;
                     break;                }
        }
        if (eeprimo)console.log(numero)
        
        
        
        
        
        
        
        
        
        
            }








}




}

main()