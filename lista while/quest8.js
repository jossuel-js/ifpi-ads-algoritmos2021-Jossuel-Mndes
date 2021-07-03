const input = require('prompt-sync')();

function main() {
    let num0 = Number(input('Informe um valor para X: '));

    



    let num1 = Number(input("Informe um outro valor: "));
    let num2 = Number(input("Informe um outro valor: "));
    let soma = num1 + num2;
    while(soma != num0) {
        
        num1 = Number(input("Informe um outro valor: "));
        num2 = Number(input("Informe um outro valor: "));
        soma = num1 + num2;
    }
    console.log("A soma dos números digitados é igual a X");
}

main();