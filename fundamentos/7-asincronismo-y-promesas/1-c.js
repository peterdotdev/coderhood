// 1-c

/* Reescribir la función
programa
del insiso anterior para que use
async
y
await
*/

async function programa() {
    try {
        const promesa = await dividirNumeros(3,0);
        console.log(promesa);
    } catch(e) {
        console.log("Se ha producido un error");
    }
}

programa();