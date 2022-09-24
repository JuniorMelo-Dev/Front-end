/* Crie uma função que retorna o nome dos membros de um MAP que tem o papel de 'Admin' no sistema

1 - Crie uma função getAdmins que recebe um Map;
2 - Crie um Map e popule-o com nomes de usuários e seus papeis no sistema;
3 - Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usuários que são administradores.
*/

function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Junior', 'Admin');
usuarios.set('Bernardo', 'User');
usuarios.set('Helena', 'Admin');
usuarios.set('Luana', 'User');

console.log(getAdmins(usuarios));