import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Platillos } from 'src/app/models/platillos';
import { PlatillosService } from 'src/app/service/platillos.service';

@Component({
  selector: 'app-detalle-platillos',
  templateUrl: './detalle-platillos.component.html',
  styleUrls: ['./detalle-platillos.component.css']
})
export class DetallePlatillosComponent {
  platillos: Platillos = null;

  constructor(
    private platillosService: PlatillosService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const cod_platillo = this.activatedRoute.snapshot.params.cod_platillo;
    this.platillosService.PlatillosPorId(cod_platillo).subscribe(
      data => {
        this.platillos = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/platillos']);
  }

}
