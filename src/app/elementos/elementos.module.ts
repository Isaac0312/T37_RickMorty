import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CartasComponent } from './cartas/cartas.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CartasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    CartasComponent
  ],
})
export class ElementosModule { }
