const input = require('prompt-sync')();

function main() {
    let emprestimo = 3000;
    let i = 0;
    while(emprestimo > 0) {
        emprestimo = emprestimo - 200 + (emprestimo - 200) * 0.0085;
        i++;
    }
    console.log(`Total de dias ate concluir o pagamento: ${i}`);
}

main();