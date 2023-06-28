/* 1. Dado el arreglo [1,2,3,4,5,6]:
a) Iterar por todos los elementos dentro del arreglo utilizando while y mostrarlos en pantalla.
b) Iterar por todos los elementos dentro del arreglo utilizando el ciclo “for” y mostrarlos en pantalla.
c) Crear una copia del arreglo usando el ciclo “for” pero con todos los elementos incrementados en 1.
d) Calcular el promedio de todos los elementos del arreglo */

let array = [1,2,3,4,5,6];
i = 0;
while (array.length > i) {
    console.log(array[i]);
    i++
}

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);  
}
let array2 = []
for (let i = 0; i < array.length; i++) {
    array2.push(array[i]+1);
}

console.log(array2);

let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum = sum + array[i] 
}

console.log(sum/array.length);

