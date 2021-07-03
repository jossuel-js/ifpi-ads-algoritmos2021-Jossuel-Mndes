const input = require('prompt-sync')();

function main() {
    var razao = Number(input("Informe a razão da PG: "));
    var a1 = Number(input("Informe o primeiro termo da PG: "));
    var  n = Number(input("Informe A(n): "));
    var i = a1;
    var termospg = 0;

    while(i <= n) {
        termospg = a1 * Math.pow(razao, (i - 1));
        console.log("Termo(",i,"):",termospg);
        i++;
    }
}

main();