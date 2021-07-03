const input = require('prompt-sync')();

function main() {
    let id = Number(input('Informe a identificação do gado: '));
    let peso = Number(input('Informe o peso do gado: '));
    let gordo = peso;
    let idgordo = id;
    let magro = peso;
    let idmagro = id;

    while(id != 0) {
        if (peso > gordo) {
            gordo = peso;
            idgordo = id;
        }
        if(peso < magro) {
            magro = peso;
            idmagro = id;
        }
        id = Number(input('Informe a identificação do gado: '));
        peso = Number(input('Informe o peso do gado: '));
    }
    console.log(`Boi mais gordo:  ${idgordo} Peso  ${gordo}  kg Boi mais magro:   ${idmagro} Peso  ${magro}kg`) 
}

main();