import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.css']
})
export class CartasComponent {
  @Input() personaje:any;
}
