/**Leia a quantidade de horas aula dadas por dois professores e o valor por hora recebido 
 * por cada um.Escreva na tela qual dos professores tem salário total maior. */

import * as io from '../exercicioB_1_10/io.js'

//calcula o valor do salário[ horas X valor da hora]
function computar_salario(horas, valor_hora){

    return horas * valor_hora
}

function main(){

    const horas_professor1 = io.get_number('Digite a quantidade de horas de aula dadas pelo primerio professor[Hrs]: ')
    const valor_hora1 = io.get_number('Digite o valor recebido por hora do primeiro professor[R$]: ')
    const horas_professor2 = io.get_number('Digite a quantidade de horas de aula dadas pelo segundo professor[Hrs]: ')
    const valor_hora2 = io.get_number('Digite o valor recebido por hora do segundo professor[R$]: ')

    const salario_professor1 = computar_salario(horas_professor1,valor_hora1)
    const salario_professor2 = computar_salario(horas_professor2,valor_hora2) 

    // informa o valor dos salários dos professores
    io.print(`
Os salários são:
Professor 1 = R$ ${salario_professor1.toFixed(2)}
Professor 2 = R$ ${salario_professor2.toFixed(2)}`)

//informa o valor do maior salário
    if(salario_professor1 > salario_professor2){
            io.print('MAIOR SALÁRIO É DO PROFESOR 1')
    }
    else if(salario_professor1 < salario_professor2){
        io.print('MAIOR SALÁRIO É DO PROFESSOR 2')
        
    }else{
        io.print('SALÁRIOS IGUAIS')
    }

}

main()