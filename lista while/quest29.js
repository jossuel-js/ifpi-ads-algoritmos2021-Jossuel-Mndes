const input = require('prompt-sync')(); // INCOMPLETA

function main() {
    let investimento = Number(input('Informe quanto será investido por mês: '));
    let taxa = Number(input('Informe qual será a taxa de juros mensal(%): '));

    let cont = "s";
    let jc = 0;
    while(cont == "s") {
        jc = investimento * Math.pow((1 + taxa), 12);
        console.log(`Investimento após 1 ano: ${investimento * 12 + jc}`);
        cont = String(input('Deseja processar mais um ano? (s/n): '));
    }
}

main();