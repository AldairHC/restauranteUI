import { Mozo } from './mozo';
import { Cocinero } from './cocinero';
import { Mesa } from './mesa';
import { Cliente } from './cliente';
import { Platillos } from './platillos';
export class Pedido{
  idpedido?: number;
  cantidad: string;
  precio: string;
  platillos: Platillos;
  cliente: Cliente;
  mesa: Mesa;
  cocinero: Cocinero;
  mozo: Mozo;

  constructor(cantidad: string, precio: string) {
      this.cantidad = cantidad;
      this.precio = precio;
  }
}
