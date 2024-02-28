/**Leia dois valores e uma das seguintes operações a serem executadas (codificadas da seguinte 
 * forma: 1 – Adição, 2 – Subtração, 3 – Multiplicação e 4 – Divisão). Calcule e escreva 
 * o resultado dessa operação sobre os dois valores lidos. */

import * as io from '../exercicioB_1_10/io.js'

//realiza os calculos segundo a opção de escolha
function fazer_calculo(numero1,numero2,opcao){

    let resultado = Number()

    if(opcao === 1){

    resultado = numero1 + numero2
    io.print(`A soma do número [${numero1}] e do número [${numero2}] é: ${resultado}.`)

    }else if(opcao === 2){

        resultado = numero1 - numero2
    io.print(`A subtração do número [${numero1}] e do número [${numero2}] é: ${resultado}.`)

    }else if(opcao === 3){

        resultado = numero1 * numero2
    io.print(`A multiplicação do número [${numero1}] e do número [${numero2}] é: ${resultado}.`)

    }else if(opcao === 4){

        resultado = numero1 / numero2
        io.print(`A divisão do número [${numero1}] e do número [${numero2}] é: ${resultado}.`)

    //se a opção não estiver dentre 1-4 então ela é inválida
    }else{

        io.print('OPÇÃO INVÁLIDA.')
    }
}
function main(){

    const valor_1 = io.get_number('Digite o primeiro valor: ')
    const valor_2 = io.get_number('Digite o segundo valor: ') 

//mostra as possiveis escolhas do usuário
    io.print(
`ADIÇÃO - [1]
SUBTRAÇÃO - [2]
MULTIPLICAÇÃO - [3]
DIVISÃO - [4]`
)
    const opcao_do_usuario = io.get_number('Escolha uma das opções: ')

    
    fazer_calculo(valor_1,valor_2,opcao_do_usuario)
}

main()