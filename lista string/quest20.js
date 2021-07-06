const input = require('prompt-sync')()
function main(){


    var frase = input("insira a frase a ser codificada : ")
    var letras = frase.length
    var Codigo = ""
    


    
    for(var i = 0;i<letras;i++){
        let VogalA = "a"
        let VogalE = "e"
        let VogalI = "i"
        let VogalO = "o"
        let VogalU = "u"
        if (frase[i]== VogalA||frase[i]== VogalE||frase[i]== VogalI||frase[i]== VogalO||frase[i]== VogalU) {
            Codigo+="#"
        }
        else if(frase[i]!=VogalA||frase[i]!= VogalE||frase[i]!= VogalI||frase[i]!= VogalO||frase[i]!= VogalU) {
            Codigo +=frase[i]
        }
    }
    

console.log(Codigo)
console.log(frase)


}

main()