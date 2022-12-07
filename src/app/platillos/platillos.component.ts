import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Platillos } from '../models/platillos';
import { PlatillosService } from '../service/platillos.service';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.css']
})
export class PlatillosComponent {
  platillos: Platillos[] = [];

  constructor(
    private platillosService: PlatillosService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.cargarPlatillos();
  }

  cargarPlatillos(): void {
    this.platillosService.ListaPlatillos().subscribe(
      data => {
        this.platillos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(cod_platillo: number) {
    this.platillosService.ElimnarPlatillos(cod_platillo).subscribe(
      data => {
        this.toastr.success('Platillo Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarPlatillos();
      },
      err => {
         this.toastr.success('Producto Eliminado', 'OK', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.cargarPlatillos();
      }
    );
  }
}
