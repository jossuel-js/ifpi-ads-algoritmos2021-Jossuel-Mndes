const input = require('prompt-sync')();

function main() {
    let num1 = Number(input('Informe um valor para dividir: '));
    let num2 = Number(input('Informe um divisor: '));

    let aux = num1;
    let quo = 0;
    let resto;
    while(aux != 0) { 
        if (aux >= num2) {
            aux = aux - num2;
            quo++;
            resto = aux;
        } else {
            aux = aux - aux;
        }
    }
    console.log(`Quociente: ${quo}Resto: ${resto}`);
}

main();