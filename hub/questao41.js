const entrada = require('prompt-sync')();

// Entrada

const CustoF = Number(entrada("Insira o valor do custo da empresa : "));

//processamento
CustoD = CustoF * 0.28;
Imposto = CustoF * 0.45;

ConsumidorC = (CustoF + CustoD + Imposto);

//saida
console.log(ConsumidorC)