const input = require('prompt-sync')();

function main() {
    let a0 = Number(input('Informe A(0): '));
    let limite = Number(input('Informe o limite: '));
    let r = Number(input('Informe a razão R: '));
    let PA = 0;
    
    for (let i = a0; i <= limite; i++) {
        PA = a0 + (i - 1) * r;
        if (PA < limite) {
            console.log(`Termo(${i}): ${PA}`);
        }
    }
}

main();