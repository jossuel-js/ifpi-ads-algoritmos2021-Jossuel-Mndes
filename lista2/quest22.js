const input = require('prompt-sync')()

function main(){

    // Entrada
    const minutoCo = Number(input("Insira o minuto de inicio :" ))
    const horaCo = Number(input("Insira a hora de inicio  : "))
    const minutoFim = Number(input("Insira o minuto do termino : "))
    const horaFim = Number(input("Insira a hora do termino  :"))

    // Processamento

    if (horaCo > horaFim){
        duraçaoH = (horaFim - horaCo) + 24
        console.log(
            "Durou",duraçaoH,"horas e"
            )
    }else{
        duraçaoH = horaFim - horaCo
        console.log(
            "Durou",duraçaoH,"horas e"
            )
    }

    if (minutoCo > minutoFim){
        duraçaoM = (minutoFim - minutoCo) + 60
        console.log(
            duraçaoM,"minutos"
            )
    }else{
        duracao_min = minutoFim- minutoCo
        console.log(
            duracao_min,"minutos"
            )
    }

}

main()