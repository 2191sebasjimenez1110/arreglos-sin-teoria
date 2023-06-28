/* 5. Cree una función que pida a n número de usuarios su nombre y edad y retorne un arreglo con los
nombres de los usuarios que son mayores de edad, luego muestre cuantos usuarios hay mayores de
edad. */

function usuarios() {
    let decision;
    let mayoreEdad = [];
    do {
    let nombre = prompt("ingrese su nombre");
    let edad = prompt("ingrese su edad");
    if (edad >= 18) {
        mayoreEdad.push(nombre);
    }
    decision = prompt("Va ingresar otro usuario S/N").toUpperCase();
    } while (decision != "N");
    return mayoreEdad;
}

let numeroUsuarios = usuarios();
console.log("la cantidad de personas mayores de edad es: " + numeroUsuarios.length);