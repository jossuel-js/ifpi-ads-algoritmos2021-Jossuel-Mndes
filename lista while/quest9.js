const input = require('prompt-sync')();

function main() {
    let numero_prova = 1;
    let quantidade_nadadores = 1;
    let somaa = 0;
    let somab = 0;
    let i = 1;
    let j = 1;
    while(numero_prova > 0) {

        numero_prova = Number(input('Informe o número da prova: '));
        quantidade_nadadores = Number(input('Informe a quantidade de nadadores: '));

        while(i <= numero_prova) {

            console.log("Prova: ",numero_prova);

            while(j <= quantidade_nadadores) {

                let nome = Number(input('Informe o nome do nadador: '));
                let lugar = Number(input('Informe a classificação do nadador: '));
                let tempo = Number(input('informe o tempo do nadador: '));
                let clube = (input('Informe o clube do nadador: '));

                if (lugar == 1) {
                    if (clube == 'a') {
                        somaa = somaa + 9;
                    } else {
                        somab = somab + 9;
                    }
                } else if(lugar == 2) {
                    if (clube == 'a') {
                        somaa = somaa + 6;
                    } else {
                        somab = somab + 6;
                    }
                } else if(lugar == 3) {
                    if (clube == 'a') {
                        somaa = somaa + 4;
                    } else {
                        somab = somab + 4;
                    }
                } else if(lugar == 4) {
                    if (clube == 'a') {
                        somaa = somaa + 3;
                    } else {
                        somab = somab + 3;
                    }
                } else {
                    if (clube == 'a') {
                        somaa = somaa + 0;
                    } else {
                        somab = somab + 0;
                    }
                }
                j++;
                
            }
            i++;
        }
    }
    console.log(`Total de pontos clube A: ${somaa}Total de pontos clube B: ${somab}`);
}

main();