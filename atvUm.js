/* 1 - Escreva um programa que leia as medidas dos lados de um triângulo e escreva se ele é
equilátero, isósceles ou escaleno. Sendo que:
− Triângulo Equilátero: possui os 3 lados iguais.
− Triângulo Isóscele: possui 2 lados iguais.
− Triângulo Escaleno: possui 3 lados diferentes. */
// Leitura das medidas dos lados
var lado1 = parseFloat(prompt("Digite o comprimento do primeiro lado:") || "0");
var lado2 = parseFloat(prompt("Digite o comprimento do segundo lado:") || "0");
var lado3 = parseFloat(prompt("Digite o comprimento do terceiro lado:") || "0");
// Verificando o tipo do triângulo
if (lado1 === lado2 && lado2 === lado3) {
    console.log("O triângulo é Equilátero.");
}
else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
    console.log("O triângulo é Isósceles.");
}
else {
    console.log("O triângulo é Escaleno.");
}
