export class Serie {
    public  numero: number;
    public  nombre: string;
    public channel: string;
    public seasons: number;
    public description: string;
    public website: string;
    public image: string;

    constructor(numero: number, nombre: string, channel: string, seasons: number, description: string, website: string, image: string) {
        this.numero = numero;
        this.nombre = nombre;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.website = website;
        this.image = image;


        
    }
    imprimirNombre(): void {
        console.log("Nombre de la serie: " + this.nombre);
    }
}
