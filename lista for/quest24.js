const input = require('prompt-sync')();

function main() {
    let pessoas = Number(input("Quantos entrevistados?"));
    let salario = Number(input(" Qual o salário: "));
    let numero_de_filhos = Number(input("Qual o número de filhos: "));
    let somaS = 0;  
    let somaF = 0; 
    let slmil = 0;    

    for (let i = 1; i <= pessoas; i++) {
        if (i > 1) {
            salario = Number(input('Informe o salário: '));
            totalFi = Number(input('Informe o número de filhos: '));
        }

        somaS += salario;
        somaF += totalFi;
        if (salario >=0 && salario <= 1000) {
            slmil++;
        }
    }
    console.log(`Média do salário da população: ${somaS/pessoas} Média do número de filhos: ${somaF/pessoas} Percentual de pessoas com salário de ate R$ 1000,00: ${slmil/pessoas * 100}%`);
}

main();