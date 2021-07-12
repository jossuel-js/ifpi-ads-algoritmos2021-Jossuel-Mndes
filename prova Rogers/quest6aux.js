function media(vetor){
    let media = 0;

    for (let i = 0; i < vetor.length; i++) {
        media += vetor[i];
    }

    media = media/vetor.length;
    return media;
}
function maior(vetor){
    let maior_valor = 0
    for(let i = 0; i < vetor.length; i++){
        if(maior_valor <= vetor[i]){
            maior_valor = vetor[i]
        }
    }
    return maior_valor
}
function menor(vetor){
    let menor_valor = vetor[0]
    for(let i = 0; i < vetor.length; i++){
        if(menor_valor >= vetor[i]){
            menor_valor = vetor[i]
        }
    }
    return menor_valor
}
function Positivo(vetor) {
    let positivos = 0;

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > 0) {
            positivos++;
        }
    }

    return positivos;
}
function Negativo(vetor) {
    let negativos = 0;

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            negativos++;
        }
    }

    return negativos;
}
function repetidos(vetor){
    for(let i = 0; i < vetor.length; i++){
        for(let j = 0; j < vetor.length; j++){
            if(vetor[i] !== vetor[j] && vetor[i] === vetor[j]){
                return true
            }else{
                return false
            }
        }
    }
}
module.exports = {
    media,
    maior,
    menor,
    Positivo,
    Negativo,
    repetidos,
}