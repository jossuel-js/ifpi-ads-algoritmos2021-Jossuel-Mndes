const input = require('prompt-sync')();

function main() {
    let num = Number(input("Informe quantos funcionarios serão entrevistados: "));
    let id = Number(input("Informe o código do funcionario: "));
    let horasT = Number(input("Informe a quantidade de horas trabalhadas: "));
    let dependentes = Number(input("Informe o número de dependentes: "));
    let salario = 0;
    let SalarioL = 0;
    let ir = 0;
    let inss = 0;

    for(let i = 0; i < num; i++) {
        if (i > 0) {
            id = Number(input('Informe o código do funcionario: '));

            horasT = Number(input('Informe a quantidade de horas trabalhadas: '));

            dependentes = Number(input('Informe o número de dependentes: '));
    } 
        salario = (12 * horasT) + (40 * dependentes);
        inss = salario * 0.085;
        ir = salario * 0.05
        SalarioL = salario - (inss + ir);

        console.log(`INSS: R$${inss} IR: R$${ir}  Salário liquido: R$${SalarioL}`);
    }
}

main();