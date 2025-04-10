/* 7- Faça um programa que pergunte qual número deseja calcular o fatorial, e exiba o resultado

Aluno: Pedro Henrique de Almeida Elias N°25
*/
var input = require("prompt-sync")();
console.log("--------------------");
console.log("Cálculo de Fatorial ");
console.log("--------------------");
var numero = parseInt(input("Por favor, informe o número que deseja calcular o fatorial: "));
var fatorial = 1;
if (numero < 0) {
    console.log("Não é possível calcular o fatorial de um número negativo.");
}
else {
    for (var contador = 1; contador <= numero; contador++) {
        fatorial *= contador;
    }
    console.log("O fatorial de ".concat(numero, " \u00E9: ").concat(fatorial));
}
