import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Platillos } from '../models/platillos';

@Injectable({
  providedIn: 'root'
})
export class PlatillosService {

  baseUrl = 'http://localhost:8082/platillos';

  constructor(private httpClient: HttpClient) { }

  public ListaPlatillos(): Observable<Platillos[]> {
    return this.httpClient.get<Platillos[]>(this.baseUrl);
  }

  public PlatillosPorId(cod_platillo: number): Observable<Platillos> {
    return this.httpClient.get<Platillos>(this.baseUrl + `/${cod_platillo}`);
  }


  public GuardarPlatillos(platillos: Platillos): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, platillos);
  }

  public ActualizarPlatillos(cod_platillo: number, platillos: Platillos): Observable<any> {
    return this.httpClient.put<any>(this.baseUrl + `/${cod_platillo}`, platillos);
  }

  public ElimnarPlatillos(cod_platillo: number): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + `/${cod_platillo}`);
  }
}
