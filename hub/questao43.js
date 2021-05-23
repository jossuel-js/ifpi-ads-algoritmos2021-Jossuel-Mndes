const entrada = require('prompt-sync')();

//entrada
const cA = Number(entrada("Coeficiente A = : "));
const cB = Number(entrada("Coeficiente B = : "));
const cC = Number(entrada("Coeficiente C = : "));
const cD = Number(entrada("Coeficiente D = : "));
const cE = Number(entrada("Coeficiente E = : "));
const cF = Number(entrada("Coeficiente F = : "));

//processamento
mutX = (cC * cE) - (cB * cF);
divX = (cA * cE) - (cB * cD);
mutY = (cA * cF) - (cC * cD);
divY = (cA * cE) - (cB * cD);

valorX = (mutX / divX);
valorY = (mutY / divY);

//saida
console.log("                  ")
console.log("O resultado da sua equção linear e : ")
console.log("                  ")
console.log("valor de x = ",valorX)
console.log("valor de y = ",valorY)
console.log("                  ")