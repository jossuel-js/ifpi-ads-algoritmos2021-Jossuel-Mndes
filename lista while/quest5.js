const input = require('prompt-sync')();

function main() {
    let x = Number(input("Informe um valor para X: "));
    let n = Number(input("Informe um valor para N: "));

    
    while(n > 2) {
        x = x/n;
        n--;
        console.log(x);
    }

}
main();