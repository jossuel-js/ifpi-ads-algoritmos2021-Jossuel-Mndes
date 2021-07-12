const input = require('prompt-sync')();

function main() {
    var emprestimo = Number(input('Informe o valor do empréstimo(R$: 40K; 60K; 81K): '));
    var parcelas = Number(input('Informe o valor das parcelas(R$: 1000; 1200; 1500): '));
    var saldo = emprestimo;
    var juros = 0;
    var novoVal = 0;

    while(saldo > 0) {
        juros = saldo * 0.01;
        novoVal = saldo - parcelas + juros;
        if (novoVal < 0) {
            parcelas = saldo;
            novoVal = 0;
        }
        console.log("RESULTADO DO MES")
        console.log(`Juros do mês: R$ ${juros}`);
        console.log(`Parcela do mês: R$ ${parcelas}`)
        console.log(`Saldo anterior: R$ ${saldo}`)
        console.log(`Novo Saldo: R$ ${novoVal}`)
        saldo = novoVal;
    }
}

main();