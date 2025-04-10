let teclado = require(`prompt-sync`)();

let num1: number = parseInt(teclado(`Digite o 1º número: `));
let num2: number = parseInt(teclado(`Digite o 2º número: `));
let num3: number = parseInt(teclado(`Digite o 3º número: `));
let num4: number = parseInt(teclado(`Digite o 4º número: `));
let num5: number = parseInt(teclado(`Digite o 5º número: `));

let maior: number = num1;
let menor: number = num1;

if (num2 > maior) {
    maior = num2;
} else if (num2 < menor) {
    menor = num2;
}

if (num3 > maior) {
    maior = num3;
} else if (num3 < menor) {
    menor = num3;
}

if (num4 > maior) {
    maior = num4;
} else if (num4 < menor) {
    menor = num4;
}

if (num5 > maior) {
    maior = num5;
} else if (num5 < menor) {
    menor = num5;
}

console.log(`O maior número é: ${maior}`);
console.log(`O menor número é: ${menor}`);
