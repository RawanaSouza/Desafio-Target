/* 
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;

*/

const input = require('readline-sync');

function palavraInversa() {
    let palavra = input.question("Insira uma palavra: ");
    let palavraInversa = "";
    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraInversa += palavra[i];
    }
    return palavraInversa;
}

console.log(palavraInversa());