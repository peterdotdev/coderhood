// La tienda de ropa

// Inserte los siguientes datos

let precioDePrenda = 1555.5; // Debe rondar entre 1500 y 3000
let porcentajeDeAumento = 33; // Debe rondar entre 25% y 100%

// Definimos el precio final de la prenda en base a los datos insertados

let precioFinal = precioDePrenda * (1 + porcentajeDeAumento/100);

// Devolver el precio final o precio excedido segun corresponda

if (precioFinal > 4000) {
    console.log("Precio excedido");
} else {
    console.log(`Precio final: ${precioFinal.toFixed(2)}`);
}