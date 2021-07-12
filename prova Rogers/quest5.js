const input = require('prompt-sync')()
function main(){
    
    console.log("Insira sua frase : ")
    
    var frase = input("")
    var tamanho =frase.length//TAMANHO
    var metade1 =""//1PARTE
    var metade2 =""//2PARTE
    var inverso1=""//INVERSO
    var inverso2=""//INVERSO
    var code = ""//RESULTADO DA CRIPTOGRAFIA(LETRAS)
    let code1 = ""//RESULTADO CRIPTOGRAFIA (lETRAS EM NUMEROS)
    
    
    //TRUNCANDO E INVERTENDO AS FRASES
    for(var i=0;i<tamanho/2;i++){
        metade1 = metade1+frase[i]
    }
    for(var i=(metade1.length)-1;i<tamanho;i++){
        metade2 = metade2+frase[i]
    }
    
    for (let i = metade1.length - 2; i >= 0; i--){
        inverso1 = inverso1 + metade1[i]
        
    }
    for (let i = metade2.length - 1; i >= 0; i--){
        inverso2 = inverso2 + metade2[i]
    }   

var junção = inverso1+inverso2//JUNTANDO STRINGS Invertidas e TRUNCADAS

//transformando vogais em numeros
for(var i = 0;i<junção.length;i++){
    
    let VogalA = "a"  //vogais
    let VogalE = "e"  //vogais
    let VogalI = "i"  //vogais
    let VogalO = "o"  //vogais
    let VogalU = "u"  //vogais

    if (junção[i]== VogalA) {
        code +=1
    }
    if (junção[i]== VogalE) {
        code +=2
    }
    if (junção[i]== VogalI) {
        code +=3
    }
    if (junção[i]== VogalO) {
        code +=4
    }
    if (junção[i]== VogalU) {
        code +=5
    }
    else if(junção[i]!=VogalA) {
        code+=junção[i]
    }
}
//TRANSFORMANDO NUMERO EM CODIGO
for (let i = 0; i < code.length; i++) {
    if (code[i] == '1') {
        code1 += '*';
    } else if(code[i] == '2') {
        code1 += '**';
    } else if(code[i] == '3') {
        code1 += '***';
    } else if(code[i] == '4') {
        code1 += '****';
    } else if(code[i] == '5') {
        code1 += '*****';
    } else if(code[i] == '6') {
        code1 += '******';
    } else if(code[i] == '7') {
        code1 += '*******';
    } else if(code[i] == '8') {
        code1 += '********';
    } else if(code[i] == '9') {
        code1 += '*********';
    } else if(code[i] == '0') {
        code1 += '#';
    } else {
        code1 += code[i];
    }
}

   //CONVERSAO DAS LETRAS NA TABELA ASCCI
    let fraseF = code1
    let code3 = 0;
    let Final = '';

    for (let i = 0; i < fraseF.length; i++) {
        if (fraseF.charCodeAt(i) >= 65 && fraseF.charCodeAt(i) <= 90) {
            code3 = fraseF.charCodeAt(i) + 10;
            if (code3 > 90) {
                code3 -= 26;
            }
            Final += String.fromCharCode(code3);
        } else if(fraseF.charCodeAt(i) >= 97 && fraseF.charCodeAt(i) <= 122) {
            code3 = fraseF.charCodeAt(i) + 10;
            if (code3 > 122) {
                code3 -= 26;
            }
            Final += String.fromCharCode(code3);
        } else {
            Final += fraseF[i];
        }
    }

    
       
console.log(Final)
}
main()