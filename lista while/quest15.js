const input = require('prompt-sync')();

function main() {
    let valor = Number(input("Informe um valor entre 0 e 255: "));

    while(valor < 0 || valor > 255 ) 
    {
        console.log('Valor invalido');
        valor = Number(input("Informe um valor entre 0 e 255: "));
    }
    
    
    var binario = valor.toString(2);
    var hexadecimal = valor.toString(16);
    
    
    
    
    console.log("Valor informado em binário: ", binario);
    console.log("Valor informado em hexadecimal: ", hexadecimal);
 
}

main();