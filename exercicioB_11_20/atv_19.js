/**Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o índice de 
 * massa corpórea (IMC = peso / altura2). Ao final, escreva se a pessoa está com peso normal 
 * (IMC abaixo de 25), obeso (IMC entre 25 e 30) ou obesidade mórbida (IMC acima de 30). */

import * as io from '../exercicioB_1_10/io.js'

/*calcula o IMC com base nos dados apresentados pelo usuário e retorna se ele está com
[peso normal, obesidade ou obesidade morbida]*/

function calculador_de_IMC(altura,peso){

    const IMC = ( peso / altura ** 2)
    
    io.print(`O seu IMC é de ${IMC.toFixed(2)}, e você está com: `)

    if(IMC < 25){
        io.print('PESO NORMAL')
    }else if(IMC >= 25 && IMC <= 30){
        io.print('OBESIDADE')
    }else{
        io.print('OBESIDADE MÓRBIDA')
    }
}

function main(){

    const altura = io.get_number('Informe o valor da altura[Metros]: ')
    const peso = io.get_number('Informe o valor do peso[Kg]: ')

    calculador_de_IMC(altura,peso)
}

main()