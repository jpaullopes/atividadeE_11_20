//Leia 1 (um) número inteiro e escreva se este número é par ou impar.

import * as io from '../exercicioB_1_10/io.js'

//verificar se o número é imapar ou par
function verificar_par_impar(numero){
    
    if(numero % 2 > 0){

        return 'IMPAR'
    }
    else{

        return 'PAR'
    }
}

function main(){

    const numero_inteiro = io.get_number_int('Digite um número inteiro: ')

    //escrever a qual tipo pertence o número
    io.print(`O número ${numero_inteiro} é um número: ${verificar_par_impar(numero_inteiro)}.`)
}

main()