/*6 – Faça um programa que pergunte qual tabuada deseja exibir, e mostre essa tabuada (tente
    usar laço de repetição)
    Aluno: Pablo Isaac Sponchiado da Silva
*/ 

let teclado = require(`prompt-sync`)();

const numero : number =(teclado('Qual tabuada você deseja exibir? (Digite um número)'));

if (numero && numero > 0) {
    console.log(`Tabuada do ${numero}:`);
}
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero}`)
}