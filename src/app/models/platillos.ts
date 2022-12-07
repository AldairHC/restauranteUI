export class Platillos{
    cod_platillo?: number;
    nombre: string;
    precio: string;
    cantidad: string;
    descripcion: string;
    imagen: string;

    constructor(nombre: string, precio: string, cantidad: string, descripcion: string, imagen: string) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}
