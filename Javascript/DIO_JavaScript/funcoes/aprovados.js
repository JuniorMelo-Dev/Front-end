/* Atividade 1
1 - Crie uma função que recebe um array alunos e um número que irá representar a média final.
2 - Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais a média final.
3 - Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.
*/

const alunos = [
    {
        nome: 'Junior',
        nota: 5.5,
        turma: '1C',
    },
    {
        nome: 'Luana',
        nota: 6.8,
        turma: '1C',
    },
    {
        nome: 'Bernardo',
        nota: 5.9,
        turma: '2C',
    },    
    {
        nome: 'Helena',
        nota: 4.9,
        turma: '2C',
    },    

];

function aprovando(arr, media) {
    let aprovados = [];

    for (let i  = 0; i <arr.length; i++) {

        //object destructuring
        const {nota, nome} = arr[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(aprovando(alunos, 5))