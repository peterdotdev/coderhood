// Simulador de descarga de informacion

/* Cuando queremos descargar informacion de internet, varias cosas pueden ir mal:
desconexion de internet, corte de luz, perdida de informacion por culpa de seres
desconocidos. */

/* Crear una funcion llamada pedirInformacion que no recibe parametros y
que devuelve el siguiente objeto que corresponde a los datos de un usuario: 
let persona = { id: 19310, nombre: "Bautista", apellido: "Di Santo" } */

/* La funcion pedirInformacion tiene:
    - 25% de posibilidades de disparar un error por desconexion de internet, 
    el nombre del error es 'NetworkError'
    - 18% de posibilidades de disparar un error por error del servidor, 
    el nombre del error es 'InternalError'
    - 10% de posibilidades de disparar un error por una anomalia, 
    el nombre del error es 'AlienError'
*/

function pedirInformacion() {

    let persona = { id: 19310, nombre: "Bautista", apellido: "Di Santo" };

    try {
        let randomNumber = Math.random();
        
        if ( randomNumber <= 0.25) {
            throw new Error("NetworkError");
        } else if ( randomNumber <= 0.43) {
            throw new Error("InternalError");
        } else if ( randomNumber <= 0.53) {
            throw new Error("AlienError");
        } else {
            return persona;
        }
    }

    catch(e) {
        return e;
    }
}