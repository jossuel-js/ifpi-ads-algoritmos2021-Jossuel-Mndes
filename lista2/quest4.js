const input = require(`prompt-sync`)();

function main(){
//entrada
const numero_inteiro = (input("Insira numero inteiro de 2 algarismos"))
const digito1 = (numero_inteiro.charAt(0));
const digito2 = (numero_inteiro.charAt(1));
//processamento
if (digito1 === digito2){
console.log(
    "A casa de unidade e centena são iguais"
    )

}else if(digito1 != digito2){
    console.log(
        "A casa de unidade e centena são diferentes"
        )
}

}
main()