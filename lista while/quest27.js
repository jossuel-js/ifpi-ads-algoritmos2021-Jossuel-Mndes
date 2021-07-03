const input = require('prompt-sync')();

function main() {
    let sexo = 0;
    let idade = 0;
    let estadocivil = 0;
    let i = 0;
    let totalMu = 0;   
    let totalHo = 0;   
    let somIdadesMu = 0;   
    let somaIdadesHo = 0;   
    let MuSolteiras = 0;    
    let HoSolteiro = 0;    
    let mulheracimade30 = 0;  

    while(i < 100) {
        sexo = Number(input('Informe o sexo(1 - Masculino; 2 - Feminino): '));
        idade = Number(input('Informe a idade: '));
        estadocivil = Number(input('Informe seu estado civil(1-Casado; 2-Solteiro; 3-Divorciado; 4-Viuvo): '));
        if (sexo == 1) {
            somaIdadesHo = somaIdadesHo + idade;
            totalHo++;
            if (estadocivil == 2) {
                HoSolteiro++;
            }
        } else if(sexo == 2) {
            somIdadesMu = somIdadesMu + idade;
            totalMu++;
            if (estadocivil == 2) {
                MuSolteiras++;
            } else if(estadocivil == 3 && idade > 30) {
                mulheracimade30++;
            }
        } else {
            console.log('Valor informado invalido!');
        }
        i++;
    }
    console.log(`Média de idade dos homens: ${somaIdadesHo/totalHo}\nMédia de idade das mulheres: ${somIdadesMu/totalMu}`);
    console.log(`Percentual de homens solteiros: ${HoSolteiro/totalHo * 100}%\nPercentual de mulheres solteiras: ${MuSolteiras/totalMu * 100}%`);
    console.log(`Quantidade de mulheres divorciadas acima dos 30 anos: ${mulheracimade30}`);
}

main();