var teclado = require("prompt-sync")();
var num1 = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
var num2 = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
var num3 = parseInt(teclado("Digite o 3\u00BA n\u00FAmero: "));
var num4 = parseInt(teclado("Digite o 4\u00BA n\u00FAmero: "));
var num5 = parseInt(teclado("Digite o 5\u00BA n\u00FAmero: "));
var maior = num1;
var menor = num1;
if (num2 > maior) {
    maior = num2;
}
else if (num2 < menor) {
    menor = num2;
}
if (num3 > maior) {
    maior = num3;
}
else if (num3 < menor) {
    menor = num3;
}
if (num4 > maior) {
    maior = num4;
}
else if (num4 < menor) {
    menor = num4;
}
if (num5 > maior) {
    maior = num5;
}
else if (num5 < menor) {
    menor = num5;
}
console.log("O maior n\u00FAmero \u00E9: ".concat(maior));
console.log("O menor n\u00FAmero \u00E9: ".concat(menor));
