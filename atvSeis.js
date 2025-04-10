var teclado = require("prompt-sync")();
var numero = Number(teclado('Qual tabuada você deseja exibir? (Digite um número)'));
if (numero && numero > 0) {
    console.log("Tabuada do ".concat(numero, ":"));
    for (var i = 1; i <= 10; i++) {
        console.log("".concat(numero, " x ").concat(i, " = ").concat(numero * i));
    }
}
else {
    console.log('Por favor, insira um número válido!');
}
