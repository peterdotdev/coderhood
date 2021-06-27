// Taller mecanico

/* un taller mecanico tiene una lista de autos para arreglar en el dia, de cada auto sabemos:
    * nombre del duenio
    * valor del arreglo
    * tiempo que tarda el arreglo (en horas)
    * lista de repuestos necesarios */

/* Lista de autos de ejemplo */

let autos = [
    {
        nombreDuenio: "Pablo",
        valorArreglo: 150000,
        tiempoArreglo: 79,
        repuestosNecesarios: ["Bujias", "Volante"]
    },
    {
        nombreDuenio: "Juan",
        valorArreglo: 10000,
        tiempoArreglo: 138,
        repuestosNecesarios: ["Torniquete", "Tornillo"]
    },
    {
        nombreDuenio: "Ema",
        valorArreglo: 300000,
        tiempoArreglo: 2,
        repuestosNecesarios: ["Bujias","Volante"]
    },
    {
        nombreDuenio: "Juan",
        valorArreglo: 20000,
        tiempoArreglo: 18,
        repuestosNecesarios: ["Tornillo"]
    }
];

// Cual es el arreglo mas caro y los repuestos que necetia

let index = 0;
let valorArregloMasCaro = autos[0].valorArreglo;
let totalArreglos = 0;

for (let i = 1; i < autos.length; i++) {
    if (valorArregloMasCaro < autos[i].valorArreglo) {
        valorArregloMasCaro = autos[i].valorArreglo;
        index = i;
    }
}

console.log(`El arreglo mas caro es de $ ${autos[index].valorArreglo.toFixed(2)} y los repuestos que necesitan son: ${autos[index].repuestosNecesarios}`);

// Todos los arreglos para personas que se llamen `Juan`

for (let i = 0; i < autos.length; i++) {
    if (autos[i].nombreDuenio === "Juan") {
        console.log(autos[i]);
    }
}

// EL precio total de los arreglos

for (let i = 0; i < autos.length; i++) {
    totalArreglos += autos[i].valorArreglo;
}

console.log(`El precio total de los arreglos es de $ ${totalArreglos.toFixed(2)}`);