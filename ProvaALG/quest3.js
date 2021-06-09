const input = require('prompt-sync')();
function Main(){

//1 entrada
const nome = (input("Insira o nome do aluno :"))
const nota1 = Number(input("Insira a primeira nota: "));
const nota2 = Number(input("Insira a segunda nota: "))
const ativ = Number(input("Insira a nota das atividades : "))

const nota1P = (nota1 * 2)
const nota2P = (nota2 * 3)

const media = ((nota1P + nota2P + ativ) / 6);

//1 processamento

if(media >7){
return console.log(
 "Parabens Aluno : ",nome,"Voce foi aprovado."
    )
}
if(media < 7 && media >= 4){
console.log(
    "Voce podera fazer o teste."
    )
}
else if(media <= 3 ){
return console.log(
  "Atenção Aluno :",nome,"Voce foi reprovado."
    )
}
//2 entrada
const texteF = Number(input("Insira a nota do texte : "));

//2 processamento
const mediaFf = ((texteF + media) / 2)

if(mediaFf >= 6){
return console.log(
"Parabens Aluno :",nome,"voce foi aprovado."
    )
}
else if(mediaFf < 5){
 return console.log(
"Atenção Aluno :",nome,"Voce foi reprovado."
    )


}
}
Main()