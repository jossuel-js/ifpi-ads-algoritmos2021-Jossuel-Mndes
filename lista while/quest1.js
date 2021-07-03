const input = require('prompt-sync')();

function main() {
    let num = Number(input("Digite um número: "));
    let i = 0;

    while(num != 0) {
        
        num = Number(input("Digite um número: "));
    




    console.log(" divisores: ");

        if(num >= 0) {
            while(i <= num) {
                if(num%i == 0) {
                    console.log(i);
                }
                i++;
            }
        } else {
            console.log("Numero invalido(Negativo)");
        }
}
console.log(i)
}
main();