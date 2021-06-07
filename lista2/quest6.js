const input = require(`prompt-sync`)();

function main(){
//entrada
const ang1 = Number(input("Insira 1numero"))
const ang2 = Number(input("Insira 2numero"))
const ang3 = Number(input("Insira 3numero"))
//processamento
const angT = (ang1 + ang2 + ang3)

if (angT === 180){
    console.log(
        "E um trinangulo"
        )
}   
if (ang1 < 90 && ang2 < 90 && ang3 < 90 ){
    console.log( 
        "E um triangulo acutangulo"
        )
}
if (ang1 === 90||ang2 === 90||ang3 === 90){
    console.log(
        "E um triangulo retangulo"
        )
}
if (ang1 > 90||ang2 >90||ang3 > 90){
console.log(
    "Triangulo obtusangulo"
    )
}


}

main()