/* 3. Cree una función que reciba un arreglo de números y retorne el número menor entre todos los
elementos del arreglo.
 */
let array = [4,3,5,6]

function numeroMenor(array) {
    let menor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (menor > array[i]) {
            menor = array[i]
        }
    }
    return menor;
}
console.log(numeroMenor(array));
