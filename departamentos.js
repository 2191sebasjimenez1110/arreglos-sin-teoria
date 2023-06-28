/* 6. Dado los arreglos valle = [“Cali” , “Tulua”, “Cartago”, “Salento”] quindio = [“Cordoba”,
“Armenia”, “Palmira”, “Circasia”] Ordene los arreglos de tal manera que los elementos(ciudades)
queden en el arreglo que les corresponde. Use ciclos. */

function departemento() {
    let valle = ["Cali","Tulua","Cartago","Salento"]
    let quindio = ["Cordoba", "Armenia", "Palmira", "Circasia"];
    let ciudadesValle = [];
    let ciudadesQuindio = [];
    for (let i = 0; i < valle.length; i++) {
        for (let j = 0; j < quindio.length; j++) {
            
        }
        if (valle[i] === "Cali" || valle[i] === "Tulua" || valle[i] === "Cartago" || valle[i] === "Salento") {
            ciudadesValle.push(valle[i]);
        }
    }
    for (let i = 0; i < quindio.length; i++) {
        if (quindio[i] === "Cordoba" || quindio[i] === "Armenia" || quindio[i] === "Palmira" || quindio[i] === "Circasia") {
            ciudadesQuindio.push(quindio[i]);
        }
    }
    console.log(ciudadesValle);
    console.log(ciudadesQuindio);
}

departemento();
