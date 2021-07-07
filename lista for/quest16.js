const input = require('prompt-sync')();

function main() {
    let n = Number(input("Insira valor N"));
    
    var antiga = 0;   
    var nova = 1;  
       
    
    if ( n < 2) {
        n = Number(input("Insira valor N"));
    }
    
    for (let i = 0; i < (n - 2); i++) {
        i = antiga
        antiga = nova;
        nova = nova + i;

        if (i == 0 || i == 1) {
            console.log(i);
        }

        console.log(nova);
    }
}

main();