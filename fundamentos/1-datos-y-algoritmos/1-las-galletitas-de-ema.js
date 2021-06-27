// Las Galletitas de Ema

// Inserte las cantidades que dispone

let huevos = 3;
let barrasChocolate = 1;
let kilosHarina = 1;
let cucharadasAzucar = 10;

// Devolver si hace falta comprar ingredientes o no

if (huevos<3 || barrasChocolate<1 || kilosHarina<0.5 || cucharadasAzucar<5) {
    console.log(`Faltan los siguientes ingredientes:
        \n- huevos: ${Math.max(3-huevos,0)}
        \n- barrasChocolate: ${Math.max(1-barrasChocolate,0)}
        \n- kilosHarina: ${Math.max(0.5-kilosHarina,0)}
        \n- cucharadasAzucar: ${Math.max(10-cucharadasAzucar)}`);
} else {
    console.log(`Se cuenta con todos los ingredientes, ¡A cocinar!`);
}