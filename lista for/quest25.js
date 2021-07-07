const input = require('prompt-sync')();

function main() {
    let n = Number(input('Informe quantos eleitores votarão: '));

console.log("Vote 171 para o candidato 1")
console.log("Vote 157 para o candidato 2")
console.log("Vote 203 para o candidato 3")
console.log("Vote 0 para branco")
console.log("Vote 8 para nulo")
  



    let voto = -1;
    let Cand1 = 0;
    let Cand2 = 0;
    let cand3 = 0;
    let branco = 0;
    let nulo = 0;

    for (let i = 0; i < n; i++) {
        voto = Number(input('Seu voto: '));
        if (voto == 171) {
            Cand1++;
        } else if(voto == 157) {
            Cand2++;
        } else if(voto == 203) {
            cand3++;
        } else if(voto == 0) {
            branco++;
        } else if(voto == 8) {
            nulo++;
        } else {
            console.log("Opçao desconhecida");
        }
    }
    console.log(`Total de votos:\nCandidato 1: ${Cand2}\nCandidato 2: ${cand3}\nCandidato 3: ${branco}\nVotos nulos: ${nulo}\nVotos em branco: ${Cand1}`);
    if (Cand1 > cand3 && Cand1 > Cand2 && Cand1 > branco) {
        console.log('Candidato 1 venceu a eleição!');
    } else if(Cand2 > Cand1 && Cand2 > cand3 && Cand2 > branco) {
        console.log('Candidato 2 venceu a eleição!');
    } else if(cand3>Cand1 && cand3 > Cand2 && cand3 > branco) {
        console.log('Candidato 3 venceu a eleição!');
    } else {
        console.log("Havera segundo turno ,ninguem conseguiu vencer as eleiçoes");
    }
}
main()