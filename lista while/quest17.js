const input = require('prompt-sync')();

function main() {
    let nome = (input('Informe o nome da candidata: '));
    let altura = (input('Informe a altura da candidata: '));
    let peso = (input('Informe o peso da candidata: '));

    let nAlta = nome;
    let alta = altura;
    let nBaixa = nome;
    let baixa = altura;
    let nGorda = nome;
    let gorda = peso;
    let nMagra = nome;
    let magra = peso;

    while( nome != "fim") {
        if (altura >= alta) {
            alta = altura;
            nAlta = nome;
        }
        if (altura <= baixa) {
            baixa = altura;
            nBaixa = nome;
        }

        if (peso >= gorda) {
            gorda = peso;
            nGorda = nome;
        }
        if (peso <= magra) {
            magra = peso;
            nMagra = nome;
        }

        nome = (input("Informe o nome da candidata: "));
        altura = (input("Informe a altura da candidata: "));
        peso = (input("Informe o peso da candidata: "));
    }

    console.log(`Candidata mais alta: Nome - ${nAlta} Altura - ${alta}  Candidata mais baixa:  Nome - ${nBaixa}  Altura - ${baixa}  Candidata mais gorda:  Nome - ${nGorda}  Peso - ${gorda}  Candidata mais magra:  Nome - ${nMagra}  Peso - ${magra}`);

}

main();