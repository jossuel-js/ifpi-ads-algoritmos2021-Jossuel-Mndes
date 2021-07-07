const input = require('prompt-sync')()
function main(){


var numlista= Number(input("insira o numero desejado de elementos : "))
var numN=0
var maior=0;

for(i=1;i<=numlista;i++){
    
numN= Number(input("insira o numero desejado : "))
if(numN>maior){
maior=numN
}
}
console.log(maior)
}
main()