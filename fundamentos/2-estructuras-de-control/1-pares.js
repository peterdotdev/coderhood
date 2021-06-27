// Pares

// Insertar valor

let limite = 10; // Cualquier numero entero y positivo

// Recorremos de 0 al limite inclusive
// Imprimiendo en pantalla los numeros pares

let i = 0;

while (i <= limite) {
    if (i%2 === 0) {
        console.log(`Impriendo ${i}, ya que es un numero par`);
    };
    i++;
}