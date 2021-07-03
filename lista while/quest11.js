const input = require('prompt-sync')();

function main() {
    let matricula = String(input('Informe a matricula do aluno: '));
    let nota0 = Number(input('informe a primeira nota: '));
    let nota1 = Number(input('informe a segunda nota: '));
    let nota2 = Number(input('informe a terceira nota: '));

    
    let mediafinal;
    let aprovados = 0;
    let reprovados = 0;

    while(matricula != "0") {
        mediafinal = ((2 * nota0) + (3 * nota1) + (5 * nota2))/10;
        if (mediafinal >= 7) {
            console.log('Aprovado!');
            aprovados++;
        } else {
            console.log('Reprovado!');
            reprovados++;
        }

        matricula = matricula = (input('Informe a matricula do aluno: '));
        nota0 = Number(input('informe a primeira nota: '));
        nota1 = Number(input('informe a segunda nota: '));
        nota2 = Number(input('informe a terceira nota: '));
    }
    let totalalunos = aprovados + reprovados;
    console.log(`Total de alunos: ${totalalunos} Aprovados: ${aprovados}  Reprovados: ${reprovados}`);
}
main()