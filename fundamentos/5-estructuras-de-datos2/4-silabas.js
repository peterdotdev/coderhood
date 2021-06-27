// Silabas

// Nuestro software de reconocimiento de voz funciona de una forma un poco particualar, y el texto reconocido nos lo envía en un
// arreglo de silabas. Dado el siguiente array:

const silabas = ["¡Ho", "la, ", "mun", "do! ", "¿To", "do", " bien?", " Me", " a", "le", "gro."]

// Obtener un string con todo el texto de corrido

const textoDeCorrido = silabas.reduce((a,b) => a+b);

console.log(textoDeCorrido); // Si es mas facil con .join("") pero bueno decide usar algo del tema visto