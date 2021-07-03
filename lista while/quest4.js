const input = require('prompt-sync')();

function main() {
    let numero = Number(input("Informe um número: "));

    
    while(numero/2 >= 1) {
        numero /= 2;
    }
    console.log(numero);

}
main()