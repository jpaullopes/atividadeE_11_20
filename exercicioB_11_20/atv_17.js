/**Leia valores inteiros em duas variáveis distintas e se o resto da divisão da primeira pela 
 * segunda for 1 escreva a soma dessas variáveis mais o resto da divisão; se for 2 escreva se 
 * o primeiro e o segundo valor são pares ou ímpares; se for igual a 3 multiplique a soma dos 
 * valores lidos pelo primeiro; se for igual a 4 divida a soma dos números lidos pelo segundo, 
 * se este for diferente de zero. Em qualquer outra situação escreva o quadrado dos números 
 * lidos. */

import * as io from './io.js'

//para somar os numero e o resto da divisão
function soma_numeros(numero1, numero2){

    const resto_div = numero1 % numero2
    const resultado = numero1 + numero2 + resto_div
    return resultado
}

//para multiplica a soma dos números pelo  primeiro
function multiplicação_numerica(numero1,numero2){

    const soma_de_valores = numero1 + numero2 
    const resultado = soma_de_valores * numero1
    return resultado 

}

// divisão da soma dos núemros pelo segundo
function divisão_numerica(numero1,numero2){

    const soma_de_valores = numero1 + numero2
    const resultado = soma_de_valores / numero2
    return resultado

}

//calcular e mostrar o quadrado dos números
function quadrado_dos_numeros(numero1,numero2){

    return `
O quadrado dos números ${numero1} e ${numero2} são:
${numero1} ^ 2 = ${numero1 ** 2}
${numero2} ^ 2 = ${numero2 ** 2}`

}

//verificar se os números são paraes ou ímpares e retorna a qual tipo eles pertencem
function verificar_impar_par(numero1,numero2){

    if(numero1 % 2 === 0){

        if(numero2 % 2 === 0){
            return `Os números ${numero1} e ${numero2} são pares.`
        }else{

            return `O número ${numero1} é par e o número ${numero2} é ímpar.`
        }
    }else if(numero1 % 2 > 0){

        if(numero2 % 2 > 0){

            return `Os números ${numero1} e ${numero2} são ímpares.`
        }else{

            return `O número ${numero1} é ímpar e o número ${numero2} é par.`
        }
    }

}

//usa as funções anteriores e retorna o resultado de acordo com o reto da divisão dos numeros
function processamento_numerico(numero1, numero2){

    if(numero1 % numero2 === 1){

        return `A soma dessas variáveis mais o resto da divisão é = ${soma_numeros(numero1,numero2)}.`

    }else if(numero1 % numero2 === 2){

        return verificar_impar_par(numero1,numero2)

    }else if( numero1 % numero2 === 3){

        return `A multiplicação da soma dos valores lidos pelo primeiro é = ${multiplicação_numerica(numero1,numero2)}.`

    }else if( numero1 % numero2 === 4){

        if(numero2 !== 0){

            return`A divisão da soma dos números lidos pelo segundo é = ${divisão_numerica(numero1,numero2).toFixed(2)}.`
        }
        else{

            return 'Resultado indefinido.'
        }

    }else{

        return quadrado_dos_numeros(numero1,numero2)
    }
}

function main(){

    const valor_1 = io.get_number_int('Informe o primeiro valor: ')
    const valor_2 = io.get_number_int('Informe o segundo valor: ')

    const numeros_processados = processamento_numerico(valor_1,valor_2)
    
    io.print(numeros_processados)
}

main()