/* 9. Cree una función que reciba dos arreglos de números enteros y muestre cual arreglo tiene un
promedio mayor de sus elementos. Se le debe pedir al usuario que introduzca los arreglos.
 */
function pedirArreglo(mensaje) {
    let array = [];
    let pedir; 
    do {
        let numero = parseInt(prompt(mensaje))
            array.push(numero)
            pedir = prompt("desea ingresar mas numeros al arreglo S/N").toUpperCase();
        }while (pedir != "N")
        return array;
}
function mayorElemento() {
    let array = pedirArreglo("ingrese los numeros del primer arreglo");
    let array2 = pedirArreglo("ingrese los numeros del segundo arreglo");
    let prom = 0;
    let prom2 = 0;
    for (let i = 0; i < array.length; i++) {
        prom += array[i];
    }
    for (let i = 0; i < array2.length; i++) {
        prom2 += array2[i];
    }
    prom = prom/array.length
    prom2 = prom2/array2.length
    if (prom > prom2) {
        console.log("el promedio del arreglo 1 es mayor que el promedio del arreglo 2");
    }else{
        console.log("el promedio del arreglo 2 es mayor que el promedio del arreglo 1");
    }
}

mayorElemento();

