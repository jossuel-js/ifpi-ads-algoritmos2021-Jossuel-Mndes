const input = require('prompt-sync')()

function main(){

    
    var num = Number(input('N = '))

    var fatorial = 1

    for(var i = num; i > 1; i--){
        fatorial = fatorial * i
    }
    console.log(fatorial)
}

main()