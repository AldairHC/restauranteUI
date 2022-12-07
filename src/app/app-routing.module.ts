import { PedidoComponent } from './pedido/pedido.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlatillosComponent } from './platillos/platillos.component';
import { RegistrarPlatillosComponent } from './platillos/registrar-platillos/registrar-platillos.component';
import { DetallePlatillosComponent } from './platillos/detalle-platillos/detalle-platillos.component';
import { EditarPlatillosComponent } from './platillos/editar-platillos/editar-platillos.component';


const routes: Routes = [
  {path: 'platillos', component: PlatillosComponent},
  {path: 'pedidos', component: PedidoComponent},
  {path: 'platillos/guardar', component: RegistrarPlatillosComponent},
  {path: 'platillos/detalle/:cod_platillo', component: DetallePlatillosComponent},
  {path: 'platillos/editar/:cod_platillo', component: EditarPlatillosComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
