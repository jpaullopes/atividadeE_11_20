/*Leia 5 (cinco) números inteiros e escreva o maior e o menor deles. Considere que todos os 
valores são diferentes.*/

import * as io from '../exercicioB_1_10/io.js'

//retornar se o número é maior entre os 5
function verificar_maior(num,num2,num3,num4,num5){

    return num > num2 && num > num3 && num > num4 && num > num5
}

//retornar se o número é menor entre os 5
function verificar_menor(num,num2,num3,num4,num5){

    return num < num2 && num < num3 && num < num4 && num < num5
}

//retornar o maior valor dentre os outros
function maior_numero(num1,num2,num3,num4,num5){

    let maior = Number()

    if(verificar_maior(num1,num2,num3,num4,num5)){
        maior = num1
    }
    else if(verificar_maior(num2,num1,num3,num4,num5)){
        maior = num2
    }else if(verificar_maior(num3,num1,num2,num4,num5)){

        maior = num3
    }else if(verificar_maior(num4,num1,num2,num3,num5)){

        maior = num4
    }else if(verificar_maior(num5,num1,num2,num3,num4)){

        maior = num5
    }

    return maior

}

//retornar o menor valor dentre os outros
function menor_numero(num1,num2,num3,num4,num5){

    let menor = Number()

    if(verificar_menor(num1,num2,num3,num4,num5)){
        menor = num1
    }
    else if(verificar_menor(num2,num1,num3,num4,num5)){
        menor = num2
    }else if(verificar_menor(num3,num1,num2,num4,num5)){

        menor = num3
    }else if(verificar_menor(num4,num1,num2,num3,num5)){

        menor = num4
    }else if(verificar_menor(num5,num1,num2,num3,num4)){

        menor = num5
    }

    return menor
}

function main(){

    const numero_1 = io.get_number_int('Digite o primeiro número[inteiro]: ')
    const numero_2 = io.get_number_int('Digite o segundo número[inteiro]: ')
    const numero_3 = io.get_number_int('Digite o terceiro número[inteiro]: ')
    const numero_4 = io.get_number_int('Digite o quarto número[inteiro]: ')
    const numero_5 = io.get_number_int('Digite o quinto número[inteiro]: ')
    
    const numero_maior = maior_numero(numero_1,numero_2,numero_3,numero_4,numero_5)
    const numero_menor = menor_numero(numero_1,numero_2,numero_3,numero_4,numero_5)

    //informar qual é o maior e o menor número
    io.print(
`Dentre os números : [${numero_1},${numero_2},${numero_3},${numero_4},${numero_5}]
O maior é o [${numero_maior}]
O menor é o [${numero_menor}]`)

}

main()