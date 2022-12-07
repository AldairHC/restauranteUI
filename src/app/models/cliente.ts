export class Cliente{
  idcliente?: number;
  nombre: string;
  apellidos: string;
  dni: string;
  telefono: string;
  direccione: string;

  constructor(nombre: string, apellidos: string, dni: string, telefono: string, direccione: string) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.dni = dni;
      this.telefono = telefono;
      this.direccione = direccione;
  }
}
