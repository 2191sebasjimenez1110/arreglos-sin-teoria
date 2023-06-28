/* 12. Cree una función que reciba un arreglo de cadenas de ADN (las cadenas estarán formadas por las
letras A o C o T o G referirse a taller de ADN pasado) y muestre la cadena de ADN con mayor número
de Timina (T). Se le debe pedir al usuario que introduzca los arreglos. */

function ingreseADN() {
    let decision;
    let nombres = [];
    do {
    let nombre = prompt("ingrese una cadena de ADN");
    nombres.push(nombre);
    decision = prompt("Va ingresar otro usuario S/N").toUpperCase();
    } while (decision != "N");
    return nombres;
}