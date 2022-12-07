import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Platillos } from 'src/app/models/platillos';
import { PlatillosService } from 'src/app/service/platillos.service';

@Component({
  selector: 'app-registrar-platillos',
  templateUrl: './registrar-platillos.component.html',
  styleUrls: ['./registrar-platillos.component.css']
})
export class RegistrarPlatillosComponent {
  nombre = '';
  precio = '';
  cantidad = '';
  descripcion = '';
  imagen = '';

  constructor(
    private platillosService: PlatillosService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  crearPlatillos(): void {
    const platillos = new Platillos(this.nombre, this.precio, this.cantidad, this.descripcion,this.imagen);
    this.platillosService.GuardarPlatillos(platillos).subscribe(
      data => {
        this.toastr.success('Platillo Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/platillos']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

}
