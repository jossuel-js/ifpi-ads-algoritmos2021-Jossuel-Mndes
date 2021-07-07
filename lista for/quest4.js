const input = require('prompt-sync')();

function main() {
    let a0 = Number(input('Informe A(0): '));
    let limite = Number(input('Informe o limite: '));
    let r = Number(input('Informe a razão R: '));
    let PG = 0;

for (let i = a0; i <= limite; i++) {
        PG = a0 * Math.pow(r, (i - 1));
        if (PG < limite) {
            console.log(`Termo(${i}): ${PG}`);
        }
    }
    
    
}

main();