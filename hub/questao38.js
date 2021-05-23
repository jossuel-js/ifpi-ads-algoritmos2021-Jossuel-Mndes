const entrada = require('prompt-sync')();

// Entrada
 numero_NUM = Number(entrada('Insira o numerador: '));
 numero_DENO = Number(entrada('Insira o denominador: '));
 numero_NUM2 = Number(entrada('Insira o numerador: '));
 numero_DENO2 = Number(entrada('Insira o denominador: '));

//processamento
mMC = numero_DENO * numero_DENO2
pAR1 = mMC / numero_DENO * numero_NUM 
pAR2 = mMC / numero_DENO2 * numero_NUM2
rePar = pAR1 + pAR2

//saida
console.log("O resultado da sua fração e :",rePar,"/",mMC,)



