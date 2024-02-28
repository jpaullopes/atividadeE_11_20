//Leia 5 (cinco) números inteiros, calcule a sua média e escreva os que são maiores que a média.

import * as io from '../exercicioB_1_10/io.js'

//calcular a média dos números
function computar_media(n1,n2,n3,n4,n5){
    const soma = n1 + n2 + n3 + n4 + n5
    const media = soma / 5

    return media
}

//retornar se o número é maior que a media
function maior_que_media(media,numero){

    return numero > media
}

function main(){

    const numero1 = io.get_number_int('Digite o primeiro número[inteiro]: ')
    const numero2 = io.get_number_int('Digite o segundo número[inteiro]: ')
    const numero3 = io.get_number_int('Digite o terceiro número[inteiro]: ')
    const numero4 = io.get_number_int('Digite o quarto número[inteiro]: ')
    const numero5 = io.get_number_int('Digite o quinto número[inteiro]: ')

    const media_dos_numeros = computar_media(numero1,numero2,numero3,numero4,numero5)

    //informar se o número é maior que a média
    if(maior_que_media(media_dos_numeros,numero1)){
        io.print(`O número ${numero1} é maior que a média[${media_dos_numeros}].`)
    }
    if(maior_que_media(media_dos_numeros,numero2)){
        io.print(`O número ${numero2} é maior que a média[${media_dos_numeros}].`)
    }
    if(maior_que_media(media_dos_numeros,numero3)){
        io.print(`O número ${numero3} é maior que a média[${media_dos_numeros}].`)
    }
    if(maior_que_media(media_dos_numeros,numero4)){
        io.print(`O número ${numero4} é maior que a média[${media_dos_numeros}].`)
    }
    if(maior_que_media(media_dos_numeros,numero5)){
        io.print(`O número ${numero5} é maior que a média[${media_dos_numeros}].`)
    }

}

main()