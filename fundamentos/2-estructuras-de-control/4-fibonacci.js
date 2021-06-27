// Fibonacci

// Definimos el limite y la variable final

let limite = 10; // Cualquier numero entero y positivo

// Recorremos de 0 al limite
// Devolver los limite primeros terminos de fibonacci
let i = 0;
let a = 0;
let b = 1;

while (i<limite) {
    console.log(a);
    [a,b] = [b,b+a];
    i++;
}