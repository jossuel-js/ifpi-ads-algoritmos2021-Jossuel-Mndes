const input = require('prompt-sync')();

function main() {
    let num = 1;
    let s = 0;
    for (let i = 1; i < 50; i++) {
        s += num/i;
        num += 2;
    }
    console.log(`S = ${s}`);
}

main();