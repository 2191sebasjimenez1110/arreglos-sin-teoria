/* 11. Cree una función que reciba un arreglo de números enteros positivos y muestre cuantos números
impares posee el arreglo. Se le debe pedir al usuario que introduzca el arreglo. */
function pedirArreglo() {
    let array = [];
    let pedir; 
    do {
        let numero = parseInt(prompt("ingrese los numeors al arreglo"))
            array.push(numero)
            pedir = prompt("desea ingresar mas numeros al arreglo S/N").toUpperCase();
        }while (pedir != "N")
        return array;
}
function impares() {
    let array = pedirArreglo();
    array.forEach(i => {
        if (array[i]%2 != 0) {
            console.log("el numero " + array[i] + "es impar.");
        }
    });
}