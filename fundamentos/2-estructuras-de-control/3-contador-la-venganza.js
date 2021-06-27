// Contador 2: La venganza del contador

// Definimos el limite y la variable final

let limite = 10; // Cualquier numero entero y positivo
let final = 4; // Cualquier numero entero y positivo

/* Recorrer desde 0 hasta que se cumpla una de las siguientes condiciones:
    Se llega a limite
    La cantidad de numeros pares desde 0 hasta limite es mayor a la variable final
Al final del recorrido imprimir la cantidad de numeros multiplos de 3
Al final del recorrido imprimir la suma de todos los numeros recorridos */

let i = 0;
let cantidadPares = 0;
let multiplosDe3 = 0;
let sumaNumerosRecorridos = 0;

while (i<limite) {
    if (i%2 === 0) {
        cantidadPares++;
        if (cantidadPares>final) {
            break;
        }
    }
    if (i%3 === 0) {
        multiplosDe3++;
    }
    sumaNumerosRecorridos += i;
    i++;
}

console.log(`La cantidad de numeros multiplos de 3 recorridos es de: ${multiplosDe3}`);
console.log(`La suma de todos los numeros recorridos es de: ${sumaNumerosRecorridos}`);