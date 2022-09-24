/* Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this.  */

function idadeCalc(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: "Cosmira",
    idade: 47,
};
const pessoa2 = {
    nome: "Mário",
    idade: 53,
};
const pessoa3 = {
    nome: "Damião",
    idade: 49,
};
const pessoa4 = {
    nome: "Graça",
    idade: 55,
};

console.log(idadeCalc.apply(pessoa4, [12]));