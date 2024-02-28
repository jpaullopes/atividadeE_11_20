/**Leia a medida de um ângulo (entre 0 e 360°) e escreva o quadrante (primeiro, segundo,
 *  terceiro ou quarto em que o ângulo se localiza.*/

import * as io from './io.js'

//verifica s eo angulo está entre 0  e 360
function validar_angulo(angulo){
    return angulo >= 0 && angulo <= 360

}
//localiza o quadrante do angulo
function localizar_quadrante(angulo){

    if(angulo >= 0 && angulo < 90){
        return 'Pimeiro quadrante'
    }else if(angulo >= 90 && angulo < 180){
        return 'Segundo quadrante'
    }else if(angulo >= 180 && angulo < 270){
        return 'Terceiro quadrante'
    }else{
        return 'Quarto quadrante'
    }
}
function main(){

    const angulo = io.get_number_int('Informe o valor do ângulo: ')

    const posicao_angulo = localizar_quadrante(angulo)
    if(validar_angulo){
        
        io.print(`A posição do Ângulo ${angulo}° é o ${posicao_angulo}.`)
    }
    else{

        //se o valor informado do ângulo não for válido ele informa que é inválido
        io.print('ÂNGULO INVÁLIDO.')
    }
}

main()