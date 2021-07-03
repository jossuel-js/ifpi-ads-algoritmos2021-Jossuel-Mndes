const input = require('prompt-sync')();

function main() {
    let nomep = String(input('Informe o nome do produto: '));
    let precop = Number(input('Informe o preço do produto: '));
    let qtdc = Number(input('Informe a quantidade comprada: '));
    let desc = 0;

    while(nomep != "fim" && nomep != "FIM") {
       
        console.log(`==============================\nNome do produto: ${nomep}\nPreço unitário: ${precop}\nQuantidade: ${qtdc}\nTotal: ${precop * qtdc}\nTotal c/ desconto: ${precop * qtdc - desc}`);
        nomep = String(input('Informe o nome do produto: '));
        precop = Number(input('Informe o preço do produto: '));
        qtdc = Number(input('Informe a quantidade comprada: '));
    }

    
    if (qtdc > 0 && qtdc <= 10) {
        return desc = 0 * (precop * qtdc);
    } else if(qtdc > 10 && qtdc <= 20) {
        return desc = 0.1 * (precop * qtdc);
    } else if(qtdc > 20 && qtdc <= 50) {
        return desc = 0.2 * (precop * qtdc);
    } else if(qtdc > 50) {
        return desc = 0.25 * (precop * qtdc);
    } else {
        return console.log('Quantidade inválida!');
    }
}

main();