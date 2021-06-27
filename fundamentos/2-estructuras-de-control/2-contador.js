// Contador

// Definimos el limite

let limite = 10; // Cualquier numero entero y positivo

// Recorremos de 0 al limite inclusive
// Imprimimos luego la cantidad de numeros impares
// Imprimimos la cantidad de numeros menores de limite/2

let i = 0;
let cantidadImpares = 0;
let cantidadMenoresLimiteSobre2 = 0;

while (i<=limite) {
    if (i%2 !== 0) {
        cantidadImpares++;
    }
    if (i < limite/2) {
        cantidadMenoresLimiteSobre2++;
    }
    i++;
}

console.log(`Cantidad de numeros impares: ${cantidadImpares}`);
console.log(`Cantidad de numeros menores a limite/2: ${cantidadMenoresLimiteSobre2}`);