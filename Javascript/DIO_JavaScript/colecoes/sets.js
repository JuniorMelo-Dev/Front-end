/* Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5] , retorne outro array com valores únicos. */

const arrray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valUnicos(arrray));