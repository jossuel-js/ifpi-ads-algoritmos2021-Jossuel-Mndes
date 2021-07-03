const input = require('prompt-sync')();

function main() {
    let num1 = Number(input("Informe o primeiro número: "));
    let num2 = Number(input("Informe o segundo número: "));

    let i = 2;
    let xmdc = 1;
    while(num1/i != 1 && num2/i != 1) {
        if (num1%i == 0 && num2%i == 0) {
            xmdc *= i;
            num1 = num1/i;
            num2 = num2/i;
        } else {
            i++;
        }
    }
    console.log(xmdc);
}

main();