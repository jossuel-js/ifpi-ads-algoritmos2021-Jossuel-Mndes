const input = require('prompt-sync')();

function main() {
    let num1 = Number(input("Informe o primeiro número: "));
    let num2 = Number(input("Informe o segundo número: "));
    
    var resto
    var x 
    var y
    
        y = num2;
        

        while(resto !=0){
            resto = x % y;
            x = y;
            y = resto;
        }
        return  console.log("O mmc dos numeros e :",(num1*num2)/x)

    
    
    
    
}
main()