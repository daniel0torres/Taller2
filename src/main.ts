
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
    const dataCell3 = document.createElement("td");
    const dataCell4 = document.createElement("td");
    dataCell1.textContent = ""+serie.numero;
    dataCell2.textContent = serie.nombre;
    dataCell3.textContent = serie.channel;
    dataCell4.textContent = ""+serie.seasons;
    
    dataRow1.appendChild(dataCell1);
    dataRow1.appendChild(dataCell2);
    dataRow1.appendChild(dataCell3);
    dataRow1.appendChild(dataCell4);



  
    tbody.appendChild(dataRow1);

}


