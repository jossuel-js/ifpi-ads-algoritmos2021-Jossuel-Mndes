const input = require('prompt-sync')()
function main(){

const inicio = Number(input("Insira o limite inicial"))
const fim= Number(input("Insira o limite final"))

for(var num=inicio ; num<=fim ; num++){
    divisores=0;
    for(var i=1 ; i<=num ; i++)
        if(num % i == 0)
            divisores++;
            if(divisores==2)
  	
            console.log(num)
}
}
main()