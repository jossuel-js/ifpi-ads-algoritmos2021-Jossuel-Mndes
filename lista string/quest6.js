const input = require('prompt-sync')();

function main() {
    let frase = input("Frase: ");


    let novaFrase = "";

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] == "1") {
            novaFrase += "um";
        } else if(frase[i] == "2"){
            novaFrase += "dois";
        } else if(frase[i] == "3"){
            novaFrase += "três";
        } else if(frase[i] == "4"){
            novaFrase += "quatro";
        } else if(frase[i] == "5"){
            novaFrase += "cinco";
        } else if(frase[i] == "6"){
            novaFrase += "seis";
        } else if(frase[i] == "7"){
            novaFrase += "sete";
        } else if(frase[i] == "8"){
            novaFrase += "oito";
        } else if(frase[i] == "9"){
            novaFrase += "nove";
        } else if(frase[i] == "0"){
            novaFrase += "zero";
        } else {
            novaFrase += frase[i];
        }
    }

    console.log(novaFrase)
}

main();