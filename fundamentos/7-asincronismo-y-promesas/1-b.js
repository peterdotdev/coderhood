// 1-b

/* Usando
then
y
catch
completar la función "programa" dada para llamar a
dividirNumeros
e imprimir el resultado o imprimir unmensaje de error 
si ocurriera. Para provocar un error pueden enviar 0 como divisor.
*/

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

dividirNumeros(5,0)
    .then((resultado) => console.log(`El resultado es: ${resultado}`))
    .catch((error) => console.log(`Surgió un error: ${error.message}`))