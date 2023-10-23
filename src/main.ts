
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
        // Crea el componente card de Bootstrap con dos filas
        const card = document.createElement("div");
        card.className = "card";
        card.style.width = "18rem";

        // Primera fila con una imagen
        const imageRow = document.createElement("div");
        imageRow.className = "row";

        const imageCell = document.createElement("div");
        imageCell.className = "col";

        const image = document.createElement("img");
        image.src = "URL_DE_LA_IMAGEN"; // Reemplaza con la URL de tu imagen
        image.className = "card-img-top";
        image.alt = "Imagen de la serie";

        imageCell.appendChild(image);
        imageRow.appendChild(imageCell);

        // Segunda fila con el nombre y la descripción
        const textRow = document.createElement("div");
        textRow.className = "row";

        const textCell = document.createElement("div");
        textCell.className = "col";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        cardBody.innerHTML = `
            <h5 class="card-title">${serie.nombre}</h5>
            <p class="card-text">${serie.description}</p>
        `;

        // Agrega un enlace al sitio web de la serie con el nombre de la serie como texto
        const enlaceSitioWeb = document.createElement("a");
        enlaceSitioWeb.href = serie.website;
        enlaceSitioWeb.textContent =  serie.website;

        cardBody.appendChild(enlaceSitioWeb);

        textCell.appendChild(cardBody);
        textRow.appendChild(textCell);

        // Agrega las filas al card
        card.appendChild(imageRow);
        card.appendChild(textRow);

        // Limpia el contenedor de resultado antes de mostrar el nuevo card
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = "";

        // Agrega el nuevo card al contenedor de resultado
        resultado.appendChild(card);
    };

    tbody.appendChild(dataRow1);
    contador++;
}







const paragraphElement = document.createElement("p");
paragraphElement.textContent = "Seasons average:" + contador ;

// Encuentra el contenedor donde deseas agregar el párrafo (por ejemplo, el body del documento)
const container = document.body; // Puedes ajustar esto a tu necesidad

// Agrega el párrafo al contenedor
container.appendChild(paragraphElement);