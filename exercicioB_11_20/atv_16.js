/**Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das duas 
 * notas for maior ou igual a 7,0. Caso a média seja inferior a 7,0, o programa deve ler a 
 * nota do exame e calcule a média final. Se esta média for maior ou igual a 5,0, o programa
 * deve escreva “Aprovado”, caso contrário deve escreva “Reprovado”. */

import * as io from '../exercicioB_1_10/io.js'

//calcula a média
function computar_media(nota1,nota2){
    return (nota1 + nota2) / 2
}

//calcula a media final
function computar_media_final(media,nota_final){
    return (media + nota_final) / 2
}

function main(){

    const nota_1 = io.get_number('Digite a primeira nota: ')
    const nota_2 = io.get_number('Digtie a segunda nota: ')

    const media_da_notas = computar_media(nota_1,nota_2)

    //inforam a média
    io.print(`Média = ${media_da_notas.toFixed(2)}`)

    //informa se foi aprovado na média normal
    if(media_da_notas >= 7 ){
        io.print('APROVADO')
    }
    // se não foi pede a nota da prova final
    else{
        const nota_final = io.get_number('Digite a nota da prova final: ')

        const media_final = computar_media_final(media_da_notas,nota_final)
        io.print(`Média final = ${media_final.toFixed(2)}`)

        //mostra se foi aprovado ou reprovado com base na média final
        if(media_final >= 5){
            io.print('APROVADO')
        }
        else{
            io.print('REPROVADO')
        }

    }

}

main()