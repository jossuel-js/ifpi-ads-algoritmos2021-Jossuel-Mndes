const input = require('prompt-sync')();

function main() {
    let numero0 = Number(input("Informe um valor fixo: "));
    let numero1 = Number(input("Informe outro número: "));

    while(numero1 != numero0) {
        numero1 = Number(input("Informe outro número: "));
    }
    console.log("Os numeros digitados sao equivalentes . ");
}

main();