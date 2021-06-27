// Dia de paga

// Inserte los siguientes datos

let repartidores = 4 // Cualquier numero entero
let esFeriado = false // true si es Feriado, false si no
let gananciaDelDia = 10000 // Cuanto recaudo la pizzeria

// Definimos lo siguiente a partir de los datos insertados

let porcentajeParaSueldos = 60; // En dias no feriados

// Si es feriado cambiar el porcentaje a 80
if (esFeriado) {
    porcentajeParaSueldos = 80;
}

let sueldoNetoDeRepartidor = gananciaDelDia * (porcentajeParaSueldos/100) / repartidores;
let gananciaDelComercioFinal = gananciaDelDia * (1-porcentajeParaSueldos/100);

// Devolvemos el sueldo neto para cada repartidor
// Y si bien no lo pide, tambien la ganancia del comercio

console.log(`Sueldo neto del repartidor: ${sueldoNetoDeRepartidor.toFixed(2)}`);
console.log(`Ganancia del comercio: ${gananciaDelComercioFinal.toFixed(2)}`);