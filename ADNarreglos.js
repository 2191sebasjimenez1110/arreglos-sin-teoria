/* 2. Dado el arreglo de cadenas de ADN [“AATGAAC”, “GTTTTTC”, “GGTAAA”, “CCCCATGGG”]
cree una función que reciba como argumento tal arreglo y muestre las cadenas de una sola base
(cadenas formadas solo de A, o solo de T, o solo de C o solo de G) que se pueden formar entre todos los
elementos del arreglo. */

let ADN = ["AATGAAC", "GTTTTTC", "GGTAAA", "CCCCATGGG"];

function ADNUnicaBase(ADN) {
    let A = "";
    let C = "";
    let G = "";
    let T = "";
    for (let i = 0; i < ADN.length; i++) {
        let cadena = ADN[i];
        for (let j = 0; j < cadena.length; j++) {
            if (cadena[j] == "A") {
                A += cadena[j];
            }
            if (cadena[j] == "C") {
                C += cadena[j];
            }
            if (cadena[j] == "T") {
                T += cadena[j];
            }
            if (cadena[j] == "G") {
                G += cadena[j];
            }
            
        }
    }
    console.log(A + " " + C  + " "+ T + " "+ G);
}
ADNUnicaBase(ADN)