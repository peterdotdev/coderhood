// 1-a

/*function dividirNumeros(dividendo, divisor) {
    return dividendo / divisor;
    }*/

/* Reescribir la función tal que retorne 
una promesa que se cumpla luego de 3 segundos (usar setTimeout), 
devolviendo el mismo resultado que la función dada. */

function dividirNumeros(dividendo, divisor) {
    return new Promise(function(resolve,reject) {
        try {
            if (divisor === 0) {
                throw new Error("0 as Divisor");
            }
            setTimeout(() => {
                resolve(dividendo/divisor);
            }, 3000);
        } catch (e) {
            reject(e);
        }
    })
}

console.log(dividirNumeros(10,10));
console.log(dividirNumeros("e",0));

