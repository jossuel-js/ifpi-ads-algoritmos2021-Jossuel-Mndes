const input = require('prompt-sync')();

function main() {
    let distancia = Number(input('Informe a distancia percorrida (km): '));
    let consumo = Number(input('Informe a quantidade de combustivel consumido (L): '));
    while(consumo > 50) {
        console.log('Você não pode consumir mais litros de combustivel do que tem no tanque (50L)');
    }
    if (distancia >= 600) {
        console.log('Já chegou ao seu destino!');
    } else if(consumo == 50) {
        console.log('Combustivel acabou antes de chegar ao seu destino!');
    } else {
        console.log('Não chegou ao destino e tambem não consumiu todo o combustivel ainda!');
    }
    console.log(`Consumo em km/L: ${distancia/consumo}`);
}

main();