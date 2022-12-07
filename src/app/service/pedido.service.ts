import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  baseUrl = 'http://localhost:8082/pedidos';

  constructor(private httpClient: HttpClient) { }

  public ListaPedido(): Observable<Pedido[]> {
    return this.httpClient.get<Pedido[]>(this.baseUrl);
  }

  public PedidoPorId(idpedido: number): Observable<Pedido> {
    return this.httpClient.get<Pedido>(this.baseUrl + `/${idpedido}`);
  }


  public GuardarPedido(pedido: Pedido): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, pedido);
  }

  public ActualizarPedido(idpedido: number, pedido: Pedido): Observable<any> {
    return this.httpClient.put<any>(this.baseUrl + `/${idpedido}`, pedido);
  }

  public ElimnarPedido(idpedido: number): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + `/${idpedido}`);
  }
}
