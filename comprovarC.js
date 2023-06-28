/* 10. Cree una función que reciba un arreglo de nombres de personas y muestre si la letra “c” se
encuentra entre tales nombres, en caso de que la letra “c” se encuentre, mostrar las veces que se
encuentra(considerando las apariciones entre todos los nombres) . Se le debe pedir al usuario que
introduzca el arreglo. */

function nombres() {
    let decision;
    let nombres = [];
    do {
    let nombre = prompt("ingrese su nombre");
    nombres.push(nombre);
    decision = prompt("Va ingresar otro usuario S/N").toUpperCase();
    } while (decision != "N");
    return nombres;
}
function comprovarC() {
    let array = nombres();
    let c = 0;
    for (let i = 0; i < array.length; i++) {
        let cadena = array[i];
        for (let j = 0; j < cadena.length; j++) {
            if (cadena[j] == "c") {
                c += 1;
            } 
        }
    }
    console.log("la letra C se encuetra " + c + " veces en los nombres del arrglo");
}

comprovarC();