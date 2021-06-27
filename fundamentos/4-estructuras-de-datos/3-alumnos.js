// Alumnos

let alumnos = [
    {
    nombre: 'MiaFate',
    ranking: 4
    },
    {
    nombre: 'Argentum',
    ranking: 2
    },
    {
    nombre: 'Lucas',
    ranking: 1
    },
    {
    nombre: 'Ema',
    ranking: 3
    }
]

// Dado un array de alumnos de Coderhood Academy, indicar quien es el que lidera el ranking de participacion en Discord

let indexMayorRanking = 0;
let mayorRanking = alumnos[0].ranking;

for (let i = 0; i < alumnos.length; i++) {
    if (mayorRanking > alumnos[i].ranking) {
        mayorRanking = alumnos[i].ranking;
        indexMayorRanking = i;
    }
}

console.log(`El alumno de mayor ranking es el gran ${alumnos[index].nombre}!`);