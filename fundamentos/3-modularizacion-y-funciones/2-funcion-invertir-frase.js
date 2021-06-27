// Invertir frase

/* Hacer una función que reciba una serie de palabras separadas 
por espacios y que imprima la misma frase pero en orden inverso. */

function invertirFrase(frase) {
    console.log(frase.split("").reverse().join(""));
}