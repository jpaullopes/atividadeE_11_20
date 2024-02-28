/**Leia quatro números (opção, num 1, num2, num3) e que escreva o valor de num1 se opção igual a
 *  1; o valor de num2 se opção for igual a 2; e o valor de num3 se opção for igual a 3. Os únicos valores possíveis para a variável opção são 1, 2 e 3. */

import * as io from '../exercicioB_1_10/io.js'
//validar a escolha do usuário
function validar_opcao(opcao){
    return opcao >= 1 && opcao <=3
}

//retornar qual foi a opção do número que ele quer ver
function retornar_o_numero(opcao,num1,num2,num3){

    if(opcao === 1){

        return num1
    }else if(opcao === 2){

        return num2
    }else{

        return num3
    }

}

function main(){

    const numero_1 = io.get_number('Digite o primeiro valor: ')
    const numero_2 = io.get_number('Digite o segundo valor: ')
    const numero_3 = io.get_number('Digite o terceiro valor: ')
    const opcao_do_usuario = io.get_number_int('Digite a opção que você deseja ler[1,2,3]: ')

    //realizar a aviliação para confirmar escolha válida
    if(validar_opcao(opcao_do_usuario)){

        //escolha válida e mostra o valor da opção
        const numero_selecionado = retornar_o_numero(opcao_do_usuario,numero_1,numero_2,numero_3)
        io.print(`Segundo a sua opção[${opcao_do_usuario}] o número escrito será o [${numero_selecionado}].`)
    }
    else{
        //escolha inválida infromada ao usuário
        io.print('OPÇÃO DE ESCOLHA INVÁLIDA.')
    }

}

main()