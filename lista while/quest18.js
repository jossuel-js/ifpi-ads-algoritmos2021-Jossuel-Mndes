const input = require('prompt-sync')();

function main() {
    let cidadea = 200000;
    let cidadeb = 800000;
    let i = 0;
    while(cidadea <= cidadeb) {
        cidadea = cidadea + (cidadea * 0.035);
        cidadeb = cidadeb + (cidadeb * 0.0135);
        i++;
    }
    console.log(`A cidade A ultrapassará a cidade B em ${i} anos`);
}

main();