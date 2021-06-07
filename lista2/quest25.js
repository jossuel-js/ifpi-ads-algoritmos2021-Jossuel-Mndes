const Input = require('prompt-sync')()
function main(){
//entrada
const userKey = (Input("Insira sua senha"))    
const senha = "1234"
//processamento
if(userKey !== senha){
           console.log("Sua senha esta errada")
           console.log("insira a senha novamente")
}
else if(userKey === senha){
           console.log("Sua senha esta correta")
           console.log("Voce sera redirecionado em breve")
}



}
main()