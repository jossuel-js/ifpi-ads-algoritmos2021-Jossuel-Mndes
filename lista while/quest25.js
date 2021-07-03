const input = require('prompt-sync')();

function main() {
    console.log('CANAIS TELEVISIVOS -- 2 -- 4 -- 5 -- 7 -- 10-- 0 (Para encerrar a entrevista)!');
    
    let canal = 1;
    let audiencia = 0;
    let canal2 = 0;
    let canal4 = 0;
    let canal5 = 0;
    let canal7 = 0;
    let canal10 = 0;
    while(canal != 0) {
        canal = Number(input('Informe qual canal você(s) está(ão) assistindo: '));
        audiencia = Number(input('Informe quantas pessoas estão assistindo: '));
        if (canal == 2) {
            canal2 = canal2 + audiencia;
        } else if(canal == 4) {
            canal4 = canal4 + audiencia;
        } else if(canal == 5) {
            canal5 = canal5 + audiencia;
        } else if(canal == 7) {
            canal7 = canal7 + audiencia;
        } else if(canal == 10) {
            canal10 = canal10 + audiencia;
        } else {
            console.log('Canal informado inválido!');
        }
    }
    let total = canal2 + canal4 + canal5 + canal7 + canal10;

    console.log(`Audiencia:Canal 2 - ${canal2} Canal 4 - ${canal4} Canal 5 - ${canal5} Canal 7 - ${canal7} Canal 10 - ${canal10}`);
    console.log(`Porcentagem:Canal 2 - ${canal2/total * 100}%  Canal 4 - ${canal4/total * 100}% Canal 5 - ${canal5/total * 100}% Canal 7 - ${canal7/total * 100}% Canal 10 - ${canal10/total * 100}%`);
}

main();