const input = require('prompt-sync')()
function main(){


var numlista= Number(input("insira o numero desejado de elementos : "))
var numN=0
var soma=0;
var media = 0
for(i=1;i<=numlista;i++){
    
numN= Number(input("insira o numero desejado : "))
soma=soma+numN
media = soma/i
}
console.log(media)
}
main()