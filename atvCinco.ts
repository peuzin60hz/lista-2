/* (10 pontos)
5 – O IMC (índice de massa corpórea) indica o grau de obesidade de uma pessoa. 
Este índice é obtido pelo peso (em Kg) dividido pelo quadrado da altura (em metros). 
A tabela a seguir apresenta as faixas deste índice:
IMC Avaliação
Menor que 18,5  - Baixo peso
De 18,5 a 24,99 - Normal
De 25 a 29,99   - Sobrepeso
Maior que 30    - Obesidade
Nome Aluno: Pedro Elias
*/ 

let teclado = require(`prompt-sync`)();

let peso: number = parseFloat(teclado(`Digite seu peso: `));
let altura: number = parseFloat(teclado(`Digite sua altura (m): `));

let imc: number = peso / (altura);

console.log(`Seu IMC é: ${imc}`);

if (imc < 18.5) {
    console.log(`Baixo peso`);
} else if (imc < 25) {
    console.log(`Normal`);
} else if (imc < 30) {
    console.log(`Sobrepeso`);
} else {
    console.log(`Obesidade`);
}