const input = require('prompt-sync')();

function main() {
    let salario = Number(input('Informe o salário: '));

  
    var novoS = 0;      
    var somaSA = 0;     
    var SomaNovoS = 0;     
    
    while(salario != 0) {
        if (salario >= 0 && salario <= 2999.99) {
            novoS = salario + salario * 0.25;
        } else if(salario >= 3000 && salario <= 5999.99) {
            novoS = salario + salario * 0.2;
        } else if(salario >= 6000 && salario <= 9999.99) {
            novoS = salario + salario * 0.15;
        } else if(salario >= 10000) {
            novoS = salario + salario * 0.1;
        } else {
            console.log('Salário informado inválido!')
        }
        somaSA += salario;
        SomaNovoS += novoS;

        console.log("Novo salario :","R$",novoS);

        salario = Number(input('Informe outro salário: '));
    }
    let DiferençaS = SomaNovoS - somaSA; 

    console.log(`Soma dos salários atuais: ${somaSA} Soma dos salários reajustados: ${SomaNovoS} Diferença entre as duas somas: ${DiferençaS}`)
}

main();