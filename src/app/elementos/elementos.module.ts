import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CartasComponent } from './cartas/cartas.component';
import { DescripcionPipe } from '../descripcion.pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    CartasComponent,
    DescripcionPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    CartasComponent
  ],
})
export class ElementosModule { }
