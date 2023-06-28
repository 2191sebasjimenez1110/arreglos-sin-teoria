/* 4. Cree una función que reciba un arreglo de números naturales y muestre todos los números primos en
él */
let array = [4,3,5,6,7,12,11,17,19,20,31]

function mostrarNumerosPrimos(areay) {
    // Función para verificar si un número es primo
    function esPrimo(num) {
        if (num <= 1) {
            return false;
        }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
        return true;
    }
    // Recorrer el arreglo y mostrar los números primos
    for (let i = 0; i < array.length; i++) {
        if (esPrimo(array[i])) {
            console.log(array[i]);
        }
    }
}
mostrarNumerosPrimos(array);
