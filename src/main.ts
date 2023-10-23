
import { series } from "./data";
console.log("Hola Daniel 13");
console.log("Hola Daniel");
console.log("Hola Daniel");


// Obtén una referencia al elemento <div> con el id "daniel"


const tbody = document.getElementById("daniel");





let contador = 0;
for (const serie of series) {
    const dataRow1 = document.createElement("tr");
    const dataCell1 = document.createElement("td");
    const dataCell2 = document.createElement("td");
    const dataCell3 = document.createElement("td");
    const dataCell4 = document.createElement("td");
   

    dataCell1.textContent = "" + serie.numero;
    dataCell2.textContent = serie.nombre;
    dataCell2.style.color = "blue";
    dataCell3.textContent = serie.channel;
    dataCell4.textContent = "" + serie.seasons;
   

    dataRow1.appendChild(dataCell1);
    dataRow1.appendChild(dataCell2);
    dataRow1.appendChild(dataCell3);
    dataRow1.appendChild(dataCell4);

    // Agrega un evento onclick a la celda "Name" (dataCell2)
        dataCell2.onclick = function() {
        // Crea la tabla Bootstrap que utiliza el componente card
        const cardTable = document.createElement("table");
        cardTable.className = "table table-bordered";

        const cardTableRow = document.createElement("tr");
        const cardTableCell = document.createElement("td");

        const card = document.createElement("div");
        card.className = "card";
        card.style.width = "18rem";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        cardBody.innerHTML = `
            <h5 class="card-title">${serie.nombre}</h5>
            <p class="card-text">${serie.channel}</p>
        `;

        card.appendChild(cardBody);
        cardTableCell.appendChild(card);
        cardTableRow.appendChild(cardTableCell);
        cardTable.appendChild(cardTableRow);

        // Limpia el contenedor de resultado antes de mostrar la nueva tabla
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = "";

        // Agrega la nueva tabla al contenedor de resultado
        resultado.appendChild(cardTable);
    };

    tbody.appendChild(dataRow1);
    contador++;
}

// Crea el párrafo con el contenido "Hola"
const paragraphElement = document.createElement("p");
paragraphElement.textContent = "Seasons average:" + contador ;

// Encuentra el contenedor donde deseas agregar el párrafo (por ejemplo, el body del documento)
const container = document.body; // Puedes ajustar esto a tu necesidad

// Agrega el párrafo al contenedor
container.appendChild(paragraphElement);