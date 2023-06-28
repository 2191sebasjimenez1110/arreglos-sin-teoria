/* 8.Cree una función que reciba un arreglo de números enteros y retorne el número mayor en él. Se le
debe pedir al usuario que introduzca el arreglo. */
function pedirArreglo(){
    let array = [];
    let pedir = true; 
    while (pedir) {
        let numero = parseInt(prompt("ingrese los nuemeros del arreglo"))
            array.push(numero)
            let decision = prompt("desea ingresar mas numeros al arreglo S/N").toUpperCase();
            if (decision != "S") {
                pedir = false;
            }
        }
    let mayor = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i]
        }
    }
    console.log("el numero mayor del arreglo es: " + mayor);
    }
