const input = require('prompt-sync')();

function main() {
    let numG = Number(input('Informe quantos gados serão revistados: '));
    let id = Number(input('Informe a identificação do gado: '));
    let peso = Number(input('Informe o peso do gado: '));
    
    let gordo = peso;
    let idgordo = 0;
    let magro = peso;
    let idmagro = 0;

    for(let i = 0; i < numG; i++) {
        if (i > 0) {
            id = Number(input('Informe a identificação do gado: '));
            peso = Number(input('Informe o peso do gado: '));
        }

        if (peso > gordo) {
            gordo = peso;
            idgordo = id;
        }
        if(peso < magro) {
            magro = peso;
            idmagro = id;
        }
    }
    console.log(`Boi mais gordo: ID - ${idgordo}  Peso - ${gordo}kg\n=================================  Boi mais magro:  ID - ${idmagro} Peso - ${magro}kg`);
}

main();