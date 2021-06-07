const input = require('prompt-sync')();
function Main(){

//1 entrada

const nota1 = Number(input("Insira a primeira nota: "));
const nota2 = Number(input("Insira a segunda nota: "))

const media = ((nota1 + nota2) / 2);

//1 processamento

if(media >7){
console.log(
    "Voce foi aprovado"
    )
}
if(media < 7 && media >= 4){
console.log(
    "Voce podera fazer o teste"
    )
}
else if(media <= 3 ){
console.log(
    "Voce foi reprovado"
    )
}
//2 entrada
const texteF = Number(input("Insira a nota do texte : "));

//2 processamento
const mediaFf = ((texteF + media) / 2)

if(mediaFf >=5){
console.log(
    "voce foi aprovado"
    )
}
else if(mediaFf < 5){
    console.log(
        "Voce foi reprovado"
        )
}
}
Main()
