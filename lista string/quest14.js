const input = require('prompt-sync')()
function main(){
var frase = input("Insira seu nome  : ")
var split = frase.split(" ")
var tamanho = split.length
var inicial =""
var junção =""
var i = 0


while(i<tamanho){
    
  inicial=split[i]
  junção+=inicial[0]
    i++
    console.log(inicial)
}  
console.log("Seu loguin e :",junção)
}
main()