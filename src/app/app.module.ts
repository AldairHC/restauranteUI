import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PlatillosComponent } from './platillos/platillos.component';
import { RegistrarPlatillosComponent } from './platillos/registrar-platillos/registrar-platillos.component';
import { EditarPlatillosComponent } from './platillos/editar-platillos/editar-platillos.component';
import { DetallePlatillosComponent } from './platillos/detalle-platillos/detalle-platillos.component';
import { PedidoComponent } from './pedido/pedido.component';


@NgModule({
  declarations: [
    AppComponent,
    PlatillosComponent,
    RegistrarPlatillosComponent,
    EditarPlatillosComponent,
    DetallePlatillosComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
