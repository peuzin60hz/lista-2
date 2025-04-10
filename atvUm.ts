/* 1 - Escreva um programa que leia as medidas dos lados de um triângulo e escreva se ele é
equilátero, isósceles ou escaleno. Sendo que:
− Triângulo Equilátero: possui os 3 lados iguais.
− Triângulo Isóscele: possui 2 lados iguais.
− Triângulo Escaleno: possui 3 lados diferentes. */

let teclado = require(`prompt-sync`)();

let ladoUm: number = parseFloat(teclado(`Digite o primeiro lado do triângulo: `));
let ladoDois: number = parseFloat(teclado(`Digite o segundo lado do triângulo: `));
let ladoTres: number = parseFloat(teclado(`Digite o terceiro lado do triângulo: `));

if (ladoUm === ladoDois && ladoDois === ladoTres) {
    console.log(`O triângulo é Equilátero.`);
} else if (ladoUm === ladoDois || ladoUm === ladoTres || ladoDois === ladoTres) {
    console.log(`O triângulo é Isósceles.`);
} else {
    console.log(`O triângulo é Escaleno.`);
}

