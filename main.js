define("Serie", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Serie = void 0;
    class Serie {
        numero;
        nombre;
        channel;
        seasons;
        description;
        website;
        image;
        constructor(numero, nombre, channel, seasons, description, website, image) {
            this.numero = numero;
            this.nombre = nombre;
            this.channel = channel;
            this.seasons = seasons;
            this.description = description;
            this.website = website;
            this.image = image;
        }
        imprimirNombre() {
            console.log("Nombre de la serie: " + this.nombre);
        }
    }
    exports.Serie = Serie;
});
define("data", ["require", "exports", "Serie"], function (require, exports, Serie_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.series = void 0;
    exports.series = [
        new Serie_1.Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "https://i.imgur.com/GGje0vc.jpg"),
        new Serie_1.Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", "https://www.netflix.com/co/title/70242311", "https://i.imgur.com/EvKe48G.jpg"),
        new Serie_1.Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "https://i.imgur.com/TDCEV1S.jpg"),
        new Serie_1.Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.", "https://www.cbs.com/shows/big_bang_theory/about/", "https://i.imgur.com/uAEpVWk.jpg"),
        new Serie_1.Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps", "https://www.bbc.co.uk/programmes/b018ttws", "https://i.imgur.com/02B7qhj.jpg"),
        new Serie_1.Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.", "https://www.bbc.co.uk/programmes/p065smy4", "https://i.imgur.com/D4y3DrQ.jpg"),
    ];
});
define("main", ["require", "exports", "data"], function (require, exports, data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log("Hola Daniel 13");
    console.log("Hola Daniel");
    console.log("Hola Daniel");
    const tbody = document.getElementById("daniel");
    let contador = 0;
    for (const serie of data_1.series) {
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
        dataCell2.onclick = function () {
            const card = document.createElement("div");
            card.className = "card";
            card.style.width = "18rem";
            const imageRow = document.createElement("div");
            imageRow.className = "row";
            const imageCell = document.createElement("div");
            imageCell.className = "col";
            const image = document.createElement("img");
            image.src = "URL_DE_LA_IMAGEN";
            image.className = "card-img-top";
            image.alt = "Imagen de la serie";
            imageCell.appendChild(image);
            imageRow.appendChild(imageCell);
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
            const enlaceSitioWeb = document.createElement("a");
            enlaceSitioWeb.href = serie.website;
            enlaceSitioWeb.textContent = serie.website;
            cardBody.appendChild(enlaceSitioWeb);
            textCell.appendChild(cardBody);
            textRow.appendChild(textCell);
            card.appendChild(imageRow);
            card.appendChild(textRow);
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = "";
            resultado.appendChild(card);
        };
        tbody.appendChild(dataRow1);
        contador++;
    }
    const paragraphElement = document.createElement("p");
    paragraphElement.textContent = "Seasons average:" + contador;
    const container = document.body;
    container.appendChild(paragraphElement);
});
