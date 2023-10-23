
import { series } from "./data";
console.log("Hola Daniel 13");
console.log("Hola Daniel");
console.log("Hola Daniel");


// Obtén una referencia al elemento <div> con el id "daniel"


const tbody = document.getElementById("daniel");



for (const serie of series) {
    const dataRow1 = document.createElement("tr");
    const dataCell1 = document.createElement("td");
    const dataCell2 = document.createElement("td");
    dataCell1.textContent = serie.nombre;
    dataCell2.textContent = serie.channel;
    dataRow1.appendChild(dataCell1);
    dataRow1.appendChild(dataCell2);


    tbody.appendChild(dataRow1);

}


